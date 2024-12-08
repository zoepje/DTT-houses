<script>
  import ic_home from '../assets/images/ic_mobile_navigarion_home@3x.png';
  import ic_home_active from '../assets/images/ic_mobile_navigarion_home_active@3x.png';
  import ic_info from '../assets/images/ic_mobile_navigarion_info@3x.png';
  import ic_info_active from '../assets/images/ic_mobile_navigarion_info_active@3x.png';
  import dtt_logo from '../assets/images/img_logo_dtt@3x.png';

  export default {
    data() {
      return {
        ic_home, ic_home_active, ic_info, ic_info_active, dtt_logo,
      };
    },
  };
</script>

<template>
  <nav>
    <ul>
      <li class="logo">
        <img :src="dtt_logo" alt="DTT-logo" class="logo">
      </li>
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
    height: 4rem;
    background-color: var(--background-color-2);
    z-index: 200;
    box-shadow: 0px -4px 17px 0px rgba(153, 153, 153, 0.3);
  }
  
  nav ul {
    padding-block: 1rem;
    list-style: none;
    display: flex;
    justify-content: space-around;
  }

  .logo {
    display: none;
  }

  img.logo {
    width: fit-content;
    height: 3rem;
  }

  .link {
    font: var(--header-inactive);
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
    font: var(--header-active);
    color: var(--primariy-text-color);

    & .non-active {
      display: none;
    }

    & .active {
      display: block;
    }
  }

  @media screen and (min-width: 600px) {
    nav {
      height: 5rem;
    }

    nav ul {
      justify-content: unset;
      align-items: center;
      gap: 5rem;
      margin-left: 9rem;
    }

    .logo {
      display: block;
    }

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