<template>
  <div class="container">
    <header class="header" :style="{ backgroundColor: '#47C4BB', borderRadius: '0 0 10px 10px' }">
      <button class="back-button">
        <i class="fas fa-arrow-left"></i>
      </button>
      <h1 class="title" style="color: #FFF; fontWeight: semi-bold; fontSize: 25px;">HOME</h1>
      <div class="search-bar">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="이름 또는 전화번호 검색"
          class="search-input"
          :style="{ backgroundColor: '#B9B1BE' }"
        />
      </div>
    </header>

    <div class="categories">
      <div class="category" v-for="(category, categoryIndex) in groupedCategories" :key="categoryIndex">
        <h2 class="category-title">{{ category.name }}</h2>
        <div class="groups">
          <div class="group" v-for="(group, groupIndex) in category.groups" :key="group.id" :style="{ backgroundColor: group.color, borderRadius: '10px' }">
            <span class="group-name" :style="{ color: '#000', fontWeight: 'semi-bold', fontSize: '25px' }">{{ group.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="list" :style="{ overflowY: 'auto', padding: '20px 0' }">
      <ul>
        <li class="list-item" v-for="contact in filteredContacts" :key="contact.id">
          <div class="profile-image">
            <img :src="contact.profilePicture" alt="프로필 사진" />
          </div>
          <div class="info">
            <span class="name">{{ contact.name }}</span>
            <span class="phoneNumber">{{ contact.phoneNumber }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

// 연락처 데이터
const contacts = [
  // ... (기존 연락처 데이터)
];

// 그룹 데이터
const groupedCategories = [
  {
 
    groups: [
      { id: 1, name: '내 연락처', color: '#B9B1BE' },
      { id: 2, name: '주변 검색', color: '#B9B1BE' },
      { id: 3, name: '위시 리스트', color: '#B9B1BE' },
      { id: 4, name: '즐겨찾기', color: '#B9B1BE' },
    ],
  },

];

// 검색어
const searchQuery = ref("");

// 검색된 연락처
const filteredContacts = computed(() => {
  const lowerCaseSearchQuery = searchQuery.value.toLowerCase();
  return contacts.filter(contact => {
    return (
      contact.name.toLowerCase().includes(lowerCaseSearchQuery) ||
      contact.phoneNumber.includes(lowerCaseSearchQuery)
    );
  });
});

// 연락처 추가
const addContact = () => {
  const name = prompt('이름을 입력하세요');
  const phoneNumber = prompt('전화번호를 입력하세요');
  const group = prompt('그룹을 입력하세요');
  const email = prompt('이메일을 입력하세요');
  const profilePicture = prompt('프로필 사진 URL을 입력하세요');

  if (name && phoneNumber && group && email && profilePicture) {
    contacts.push({
      id: Math.max(...contacts.map(contact => contact.id)) + 1,
      name,
      phoneNumber,
      group,
      email,
      profilePicture,
    });
  }
};
</script>

<style scoped>
/* 기존 스타일 */

/* 상단 바 */
.header {
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid #CCCCCC;
  border-radius: 0 0 10px 10px; /* 아래쪽 모서리만 둥글게 설정 */
}

.back-button {
  align-self: flex-start; /* 왼쪽 상단으로 정렬 */
  margin-bottom: 10px;
  cursor: pointer;
}

.title {
  font-weight: bold;
  font-size: 18px;
  color: #fdfdfd; /* 글자 색상: #FFFFF */
  margin-bottom: 10px;
}

/* 검색창 */
.search-bar {
  width: 100%;
}

.search-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #CCCCCC;
  border-radius: 5px;
  font-size: 16px;
  background-color: #B9B1BE; /* 배경색: #B9B1BE */
}

/* 카테고리 */
.categories {
  margin-bottom: 20px;
  padding: 0 20px;
}

.category {
  margin-bottom: 20px;
}

.category-title {
  font-size: 10px;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: #FFFFFF; /* 배경색 */
  color: #000000; /* 글자 색상 */
}

.groups {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.group {
  flex-basis: calc(50% - 10px);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px; /* 전체 모서리 둥글게 설정 */
  cursor: pointer;
  text-align: center;
  font-size: 10px;
  color: #fdfdfd;
  font-weight: semi-bold;
}

/* 연락처 목록 */
.list {
  padding: 20px;
  text-align: left; /* 왼쪽 정렬 */
}

.list-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #CCCCCC;
}

.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
}

.info {
  flex: 1;
  display: flex;
  align-items: center;
}

</style>
