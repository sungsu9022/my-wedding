<template>
  <div class="c-account _wrap">
    <div class="ui styled accordion" ref="accordion">
      <div class="title _title_area _small_text"
           :class="maleActive"
           @click="toggleArea($event, 'MALE')"
      >
        신랑측 계좌번호
        <i v-show="maleActive" class="chevron up icon"></i>
        <i v-show="!maleActive" class="chevron right icon"></i>
      </div>
      <div class="content" :class="maleActive">
        <table class="ui basic table">
          <tbody>
            <tr>
              <td class="six wide left aligned">
                <p>신랑 - <strong>박성수</strong></p>
                <span class="_bank_info">
                  국민은행<br>
                  {{ this.bankAccount.male  }}
                </span>
                <div class="_bank_btn_area">
                  <div class="ui buttons">
                    <button class="ui mini icon button _copy_btn" @click="copyBankAccount($event, this.bankAccount.male)">
                      <i class="copy icon"></i>
                      복사
                    </button>
                    <button class="ui mini button _kakaopay_btn"  @click="moveKakaoPay($event, this.kakaoPay.male)">
                      <img class="ui mini image" src="~@/assets/images/kakaopay-btn.png">
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="left aligned">
                <p>신랑 혼주 - <strong>신미애</strong></p>
                <span class="_bank_info">
                  국민은행<br>
                  {{ this.bankAccount.maleMother }}
                </span>
                <div class="_bank_btn_area">
                  <div class="ui buttons">
                    <button class="ui mini icon button _copy_btn" @click="copyBankAccount($event, this.bankAccount.maleMother)">
                      <i class="copy icon"></i>
                      복사
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="title _title_area _small_text"
           :class="femaleActive"
           @click="toggleArea($event, 'FEMALE')">
        신부측 계좌번호
        <i v-show="femaleActive" class="chevron up icon"></i>
        <i v-show="!femaleActive" class="chevron right icon"></i>
      </div>
      <div class="content" :class="femaleActive">
        <table class="ui basic table _tiny_text">
          <tbody>
          <tr>
            <td class="six wide left aligned">
              <p>신부 - <strong>김규빈</strong></p>
              <span class="_bank_info">
                기업은행<br>
                {{ this.bankAccount.female  }}
              </span>
              <div class="_bank_btn_area">
                <div class="ui buttons">
                  <button class="ui mini icon button _copy_btn" @click="copyBankAccount($event, this.bankAccount.female)">
                    <i class="copy icon"></i>
                    복사
                  </button>
                  <button class="ui mini button _kakaopay_btn" @click="moveKakaoPay($event, this.kakaoPay.female)">
                    <img class="ui mini image" src="~@/assets/images/kakaopay-btn.png">
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="left aligned">
              <p>신부 혼주 - <strong>송인숙</strong></p>
                <span class="_bank_info">
                  농협<br>
                  {{ this.bankAccount.femaleMother }}
                </span>
              <div class="_bank_btn_area">
                <div class="ui buttons">
                  <button class="ui mini icon button _copy_btn" @click="copyBankAccount($event, this.bankAccount.femaleMother)">
                    <i class="copy icon"></i>
                    복사
                  </button>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>


    <div class="bottom center ui toast-container _toast" v-show="showCopyCompleteModal">
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
._wrap {
  text-align: -webkit-center;
  padding-left: 50px;
  padding-right: 50px;
  font-size: 14px;
  p {
    line-height: 24px;
    color: #797979;
  }
  strong {
    color: #333333;
  }
  span {
    line-height: 22px;
    color: #797979;
  }
  ._bank_info {
    margin-top: 5px;
    color: #797979;
  }

}

.bank {
  line-height: 2.5;
}

._toast {
  bottom: 30px!important;
}

._toast_color {
  background-color: #4d7846!important;
  opacity: 0.9!important;
  color: white!important;
}

._title_area {
  line-height: 28px;
}

._bank_btn_area {
  text-align: right;
}

._kakaopay_btn {
  background-color: #FFEC44!important;
  width: 60px!important;
}

._copy_btn {
  background-color: #FCFAF7!important;
  width: 60px!important;
  margin-right: 5px!important;
}

@media (max-width:340px){
  .content {
    padding:0;
    font-size:13px;
  }
}

</style>