<template>
  <div class="multiselect">
    <h3>{{ title }}</h3>
    <div class='search-box'>
      <input
        type="text"
        class="search-input"
        placeholder="Zoek op ..."
        v-model="searchterm"
        @keyup="onInput"
      />
      <svg class='search-icon' width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.8 12.2l-3.9-4c.6-.8 1.1-2 1.1-3.1 0-2.8-2.3-5-5-5-2.8 0-5 2.3-5 5 0 2.8 2.2 5 5 5 .8 0 1.7-.2 2.3-.5l3.9 4.3c.2.2.6.2.8 0l.8-.8c.3-.3.3-.7 0-.9zM6 8.1c-1.7 0-3-1.4-3-3 0-1.7 1.4-3 3-3s3 1.4 3 3-1.4 3-3 3z"
          fill-rule="evenodd"
        />
      </svg>
    </div>
    <div class='dropdown'>
    <ul>
      <li
        class="selected"
        v-for="(selectedItem, index) in selectedItems"
        :key="index+selectedItem.name"
      >
        <input
          type="checkbox"
          :id="index+selectedItem.name"
          :checked="selectedItem.checked"
          @click="select(selectedItem)"
        />
        <label :for="index+selectedItem.name" v-html="selectedItem.name"></label>
      </li>
    </ul>
    <ul>
      <li v-for="(filteredItem, index) in filteredItems" :key="index+filteredItem.name">
        <input
          type="checkbox"
          :id="index+filteredItem.name"
          :checked="filteredItem.checked"
          @click="select(filteredItem)"
        />
        <label :for="index+filteredItem.name" v-html="filteredItem.name"></label>
      </li>
    </ul>
    </div>
    <input type="button" class="save-icon" @click='saveData' value="Toepassen" />
  </div>
</template>

<script lang='ts'>
export interface MultiSelectItem {
  name?: string;
  checked?: boolean;
}
export default {
  name: "multiselect",
  components: {},
  data() {
    return {
      title: "Productgroep",
      multiSelectData: [],
      searchterm: '',
      multiSelectDataObjects: [],
      selectableItems: [],
      filteredItems: [],
    };
  },
  mounted() {
    const selectedData = localStorage.getItem('multiselect');
    fetch('https://raw.githubusercontent.com/hvgeertruy/frontend-exercise/master/assets/items.json')
    .then((resp)=>resp.json())
    .then((resp)=>{
      this.multiSelectData=resp.data; 
      this.multiSelectDataObjects = this.createMultiSelectData(
      this.multiSelectData
    );

    if(selectedData!=null){
      console.log('use saved data');
      this.applySelectedData(JSON.parse(selectedData));
    }
    else{
      console.log('no saved data');
    }

    this.filteredItems = this.getFilteredItems();
    
    }).catch((err)=>{
      console.log('error'+err);
    });
    
  },
  computed: {
    selectedItems(): MultiSelectItem[] {
      return this.multiSelectDataObjects.filter((item: MultiSelectItem) => {
        return item.checked;
      });
    },
  },
  methods: {
    select(item: MultiSelectItem): void {
      item.checked = !item.checked;
      this.filteredItems = this.getFilteredItems(this.searchterm);
    },
    onInput(): void {
      this.filteredItems = this.getFilteredItems(this.searchterm);
    },
    saveData(): void {
      localStorage.setItem('multiselect', JSON.stringify(this.selectedItems));
    },
    applySelectedData(selectedData: MultiSelectItem[]): void {
      this.multiSelectDataObjects.forEach(function (item) {
        selectedData.forEach((selectedItem)=>{
          if(item.name === selectedItem.name) {
            item.checked = selectedItem.checked;
            return;
          }
        });
      });
    },
    createMultiSelectData(data: string[]): MultiSelectItem[] {
      return data.map((element) => {
        const multiItem = {} as MultiSelectItem;
        multiItem.name = element;
        multiItem.checked = false;
        return multiItem;
      });
    },
    getSelectableItems(): MultiSelectItem[] {
      // remove selected from all, to get selectable
      return this.multiSelectDataObjects.filter((item: MultiSelectItem) => {
        return !item.checked;
      });
    },
    getFilteredItems(term?: string): MultiSelectItem[] {
      this.selectableItems = this.getSelectableItems();
      return typeof term === "undefined" || term === ""
        ? this.selectableItems
        : this.selectableItems.filter((item: MultiSelectItem) => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
          });
    },
  },
};
</script>

<style lang="scss" scoped>
div.multiselect {
  border: 1px solid $gray-border;
  background-color: $gray-bckgrnd;
  border-radius: 5px;
  padding: 20px;
  font-size: 12px;

  @media screen and (min-width: 769px){
    max-width: 300px;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: normal;
    margin: 0 0 20px 0;
  }
  & .search-box {
    position: relative;

    & .search-input {
      font-size: 1.2rem;
      width:77%;
      padding: 3%;
      padding-right: 20%;
      outline: none;
      border: 1px solid $gray-border;
      border-radius: 5px;
      
    }
    & .search-icon {
      position: absolute;
      top: 0;
      bottom:0;
      right: 4%;
      height: 100%;
    }
  }

  & .dropdown {
    max-height: 210px;
    overflow-y: scroll;
    margin: 20px 0;

    &::-webkit-scrollbar {
      width: 5px;
      border-radius: 3px;
    }
    &::-webkit-scrollbar-track {
      background: $gray-scroll-bckgrnd;
    }
    &::-webkit-scrollbar-thumb,
    &::-webkit-scrollbar-thumb:hover {
      background: $gray-border;
    }

    & ul {
      padding: 0;
      margin: 0;

      &:empty {
        height: 0;
      }
      & li {
        list-style: none;
        line-height: 2rem;
        text-align: left;
        &.selected label {
          color:$blue;
        }
        & label {
          font-size:1rem;
          padding-left: 10px;
        }
      }
    }
  }
  & input.save-icon {
    width: 100%;
    height: 32px;
    background-color: $blue;
    color:white;
    border-radius: 3px;
    border:none;
    box-shadow: 0px 1px 1px $blue-shadow;
    &:active,
    &:focus {
      border:none;
      outline:none;
      background-color: $blue-active;
      box-shadow: 0px 1px 2px $blue-shadow;
    }
  }


  
}
</style>
