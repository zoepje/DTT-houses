<script>
  import ic_home from '../assets/images/ic_mobile_navigarion_home@3x.png';
  import ic_home_active from '../assets/images/ic_mobile_navigarion_home_active@3x.png';
  import ic_info from '../assets/images/ic_mobile_navigarion_info@3x.png';
  import ic_info_active from '../assets/images/ic_mobile_navigarion_info_active@3x.png';

  export default {
    data() {
      return {
        ic_home, ic_home_active, ic_info, ic_info_active,
      };
    },
  };
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" class="link">
          <img :src="ic_home" alt="houses-page icon" class="non-active">
          <img :src="ic_home_active" alt="houses-page icon" class="active">
          <p>Houses</p>
        </router-link>
      </li>
      <li>
        <router-link to="/about" class="link">
          <img :src="ic_info" alt="houses-page icon" class="non-active">
          <img :src="ic_info_active" alt="houses-page icon" class="active">
          <p>About</p>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    height: fit-content;
  }
  
  nav ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }

  .link {
    text-decoration: none;
    color: var(--secondary-text-color);
  }

  img {
    width: 30px;
    height: 30px;
  }

  p {
    display: none;
  }

  .active {
    display: none;
  }

  .router-link-active {
    font-weight: bold;
    color: var(--primariy-text-color);

    & .non-active {
      display: none;
    }

    & .active {
      display: block;
    }
  }

  @media screen and (min-width: 600px) {
    img {
      display: none;
    }

    .router-link-active .active {
      display: none;
    }

    p {
      display: block;
    }
  }
</style>