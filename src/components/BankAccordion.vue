<template>
  <div class="c-account _center_aligned">
    <div class="ui styled accordion" ref="accordion">
      <div class="title"
           :class="maleActive"
           @click="toggleArea($event, 'MALE')"
      >
        <i class="dropdown icon"></i>
        신랑측 계좌번호
      </div>
      <div class="content" :class="maleActive">
        <table class="ui basic table">
          <tbody>
            <tr>
              <td class="six wide left aligned">
                <span>
                  <span class="bank">국민은행 </span>
                  <span>{{ this.bankAccount.male  }}</span>
                </span>
                <br />
                <span>신랑 - 박성수</span>
              </td>
              <td class="ten wide right aligned">
                <div class="ui buttons">
                <button class="ui mini icon button" @click="copyBankAccount($event, this.bankAccount.male)">
                  <i class="copy icon"></i>
                  복사
                </button>
                <button class="ui mini yellow button" @click="moveKakaoPay($event, this.kakaoPay.male)">
                  <img class="ui mini image" src="~@/assets/images/kakaopay-btn.png">
                </button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="left aligned">
                <span>
                  <span class="bank">국민은행 </span>
                  <span>{{ this.bankAccount.maleMother }}</span>
                </span>
                <br />
                <span>신랑 혼주 - 신미애</span>
              </td>
              <td class="right aligned">
                <div class="ui buttons">
                  <button class="ui mini icon button" @click="copyBankAccount($event, this.bankAccount.maleMother)">
                    <i class="copy icon"></i>
                    복사
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="title"
           :class="femaleActive"
           @click="toggleArea($event, 'FEMALE')">
        <i class="dropdown icon"></i>
        신부측 계좌번호
      </div>
      <div class="content" :class="femaleActive">
        <table class="ui basic table">
          <tbody>
          <tr>
            <td class="six wide left aligned">
                <span>
                  <span class="bank">기업은행 </span>
                  <span>{{ this.bankAccount.male  }}</span>
                </span>
              <br />
              <span>신부 - 김규빈</span>
            </td>
            <td class="ten wide right aligned">
              <div class="ui buttons">
                <button class="ui mini icon button" @click="copyBankAccount($event, this.bankAccount.female)">
                  <i class="copy icon"></i>
                  복사
                </button>
                <button class="ui mini yellow button" @click="moveKakaoPay($event, this.kakaoPay.female)">
                  <img class="ui mini image" src="~@/assets/images/kakaopay-btn.png">
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="left aligned">
                <span>
                  <span class="bank">농협 </span>
                  <span>{{ this.bankAccount.femaleMother }}</span>
                </span>
              <br />
              <span>신부 혼주 - 송인숙</span>
            </td>
            <td class="right aligned">
              <div class="ui buttons">
                <button class="ui mini icon button" @click="copyBankAccount($event, this.bankAccount.femaleMother)">
                  <i class="copy icon"></i>
                  복사
                </button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>


    <div class="bottom center ui toast-container" v-show="showCopyCompleteModal">
      <div class="floating toast-box" style="text-align: left">
        <div role="alert" class="ui toast compact _toast_color" style="opacity: 1;">
          <i class="copy icon" style="visibility: visible;"></i>
          <div class="content">
            <div class="message">복사가 완료되었습니다.</div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "bank-accordion",
  computed: {
    maleActive() {
      if(this.showMaleContent) {
        return "active"
      } else {
        return ""
      }
    },
    femaleActive() {
      if(this.showFemaleContent) {
        return "active"
      } else {
        return ""
      }
    }
  },
  data() {
    return {
      showMaleContent: false,
      showFemaleContent: false,
      bankAccount: {
        male : "99270132461",
        maleMother: "59220201669901",
        female: "53902218301017",
        femaleMother: "21105152369181",
        femaleFather: "21105152369181",
      },
      kakaoPay: {
        male : "https://qr.kakaopay.com/FUI1VLcBZ",
        female: "https://qr.kakaopay.com/Ej803zULX",
      },
      showCopyCompleteModal: false,
    };
  },
  mounted() {
  },
  methods: {
    toggleArea(e, targetName) {
      if (targetName === "MALE") {
        this.showMaleContent = !this.showMaleContent
      }
      if (targetName === "FEMALE") {
        this.showFemaleContent = !this.showFemaleContent
      }
    },
    copyBankAccount(e, bankAccount) {
      this.$copyText(bankAccount).then(() => {
        this.showCopyCompleteModal = true
        setTimeout(() => {
          this.showCopyCompleteModal = false
        }, 1000)
      })
    },
    moveKakaoPay(e, kakaoPayUrl) {
      location.href = kakaoPayUrl
    }
  }
};
</script>

<style scoped lang="scss">
._center_aligned {
  text-align: -webkit-center;
  padding-left: 50px;
  padding-right: 50px;
}

.bank {
  line-height: 2.5;
}

._toast_color {
  background-color: #4d7846!important;
  opacity: 0.9!important;
  color: white!important;
}

@media (max-width:340px){
  .content {
    padding:0;
    font-size:13px;
  }
}

._fixed_center {
  bottom: 20px;
  position: fixed;
  text-align: center;
  z-index: 9999;
}

</style>