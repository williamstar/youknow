<template>
  <div class="user-info-form-module">
    <form @mouseover="toggleEdit($event)" @mouseleave="toggleEdit($event)" data-attr="sex">
      <label for="性别">性别</label>
      <div class="content sex">
        <span v-if="!allAttr['sex']" class="gender">{{userInfo.gender === 'm'? '男': '女'}}</span>
        <edit-button :all-attr="allAttr" :attr="'sex'" @edit-attr="editAttr" ref="sexButton"></edit-button>
        <div v-if="allAttr['sex']" class="edit-sex">
          <input class="m-radio" type="radio" value="m" name="gender">男
          <input class="f-radio" type="radio" value="f" name="gender">女
        </div>
        <span v-if="allAttr['sex']" class="save-or-quite"><button class="button save" data-attr="sex" @click.prevent="save($event)">保存</button><button class="button quit" data-attr="sex" @click.prevent="quit($event)">取消</button></span>
      </div>
    </form>
    <form>
      <label for="一句话介绍">一句话介绍</label>
      <div class="content brief-desc">
        <span v-if="!allAttr['briefDesc']" class="brief-desc">{{userInfo.briefDesc}}</span>
        <edit-button :all-attr="allAttr" :attr="'briefDesc'" @edit-attr="editAttr" ref="briefDescButton"></edit-button>
        <div v-if="allAttr['briefDesc']" class="edit-brief-desc">
          <input class="input-brief-desc briefDescHook" type="text" :value="userInfo.briefDesc" @focus="toggleFocus($event)" @blur="toggleFocus($event)">
        </div>
        <span v-if="allAttr['briefDesc']" class="save-or-quite"><button class="button save" data-attr="briefDesc" @click.prevent="save($event)">保存</button><button class="button quit" data-attr="briefDesc" @click.prevent="quit($event)">取消</button></span>
      </div>
    </form>
    <form>
      <label for="居住地">居住地</label>
      <div class="content">
      </div>
    </form>
    <form>
      <label for="所在行业">所在行业</label>
      <div class="content">
        <span v-if="!allAttr['currentJob']" class="currentJob">{{userInfo.currentJob}}</span>
        <edit-button :all-attr="allAttr" :attr="'currentJob'" @edit-attr="editAttr" ref="briefDescButton"></edit-button>

        <my-select v-if="allAttr['currentJob']" :value-list="optionList" :option-list="optionList" :current-val="userInfo.currentJob" marked="currentJob"></my-select>
        <span v-if="allAttr['currentJob']" class="save-or-quite"><button class="button save" data-attr="currentJob" @click.prevent="save($event)">保存</button><button class="button quit" data-attr="currentJob" @click.prevent="quit($event)">取消</button></span>
      </div>
    </form>
    <form>
      <label for="职业经历">职业经历</label>
      <div class="content"></div>
    </form>
    <form>
      <label for="教育经历">教育经历</label>
      <div class="content"></div>
    </form>
    <form>
      <label for="个人简介">个人简介</label>
      <div class="content desc">
        <span class="desc">{{userInfo.desc}}</span>
        <edit-button :all-attr="allAttr" :attr="'desc'" @edit-attr="editAttr" ref="briefDescButton"></edit-button>
        <textarea v-if="allAttr['desc']" class="edit-desc" cols="30" rows="3"></textarea>
        <span v-if="allAttr['desc']" class="save-or-quite"><button class="button save" data-attr="desc" @click.prevent="save($event)">保存</button><button class="button quit" data-attr="desc" @click.prevent="quit($event)">取消</button></span>
      </div>
    </form>
  </div>
</template>

<script type="text/javascript">
import editButton from './smallcomponents/EditButton';
import mySelect from './smallcomponents/MySelect';

export default {
  props: {
    userInfo: {
      type: Object,
    },
  },
  data() {
    return {
      allAttr: {
        sex: false,
        briefDesc: false,
        address: false,
        currentJob: false,
        career: false,
        education: false,
        desc: false,
      },
      optionList: [
        '高新科技',
        '互联网',
        '电子商务',
        '电子游戏',
        '计算机软件',
        '计算机硬件信息传媒',
        '出版业',
        '电影录音',
        '广播电视',
        '通信金融',
        '银行',
        '资本投资',
        '证券投资',
        '保险',
        '信贷',
        '财务',
        '审计服务业',
        '法律',
        '餐饮',
        '酒店',
        '旅游',
        '广告',
        '公关',
        '景观',
        '咨询分析',
        '市场推广',
        '人力资源',
        '社工服务',
        '养老服务教育',
        '高等教育',
        '基础教育',
        '职业教育',
        '幼儿教育',
        '特殊教育',
        '培训医疗服务',
        '临床医疗',
        '制药',
        '保健',
        '美容',
        '医疗器材',
        '生物工程',
        '疗养服务',
        '护理服务艺术娱乐',
        '创意艺术',
        '体育健身',
        '娱乐休闲',
        '图书馆',
        '博物馆',
        '策展',
        '博彩制造加工',
        '食品饮料业',
        '纺织皮革业',
        '服装业',
        '烟草业',
        '造纸业',
        '印刷业',
        '化工业',
        '汽车',
        '家具',
        '电子电器',
        '机械设备',
        '塑料工业',
        '金属加工',
        '军火地产建筑',
        '房地产',
        '装饰装潢',
        '物业服务',
        '特殊建造',
        '建筑设备贸易零售',
        '零售',
        '大宗交易',
        '进出口贸易公共服务',
        '政府',
        '国防军事',
        '航天',
        '科研',
        '给排水',
        '水利能源',
        '电力电网',
        '公共管理',
        '环境保护',
        '非营利组织开采冶金',
        '煤炭工业',
        '石油工业',
        '黑色金属',
        '有色金属',
        '土砂石开采',
        '地热开采交通仓储',
        '邮政',
        '物流递送',
        '地面运输',
        '铁路运输',
        '管线运输',
        '航运业',
        '民用航空业农林牧渔',
        '种植业',
        '畜牧养殖业',
        '林业',
        '渔业',
      ],
    };
  },
  methods: {
    editAttr(attr) {
      this.$set(this.allAttr, attr, true);
      // 设置自动聚焦
      if (attr === 'briefDesc' || attr === 'desc') {
        this.$nextTick(() => {
          document.querySelector(`.${attr}Hook`).focus();
        });
      }
    },
    toggleEdit(event) {
      // let attr = event.currentTarget.dataset.attr;
      // this.$refs[`${attr}Button`].toggleAppear();
    },
    toggleFocus(event) {
      let parentNode = event.currentTarget.parentNode;
      if (parentNode.classList.contains('focus')) {
        parentNode.classList.remove('focus');
      } else {
        parentNode.classList.add('focus');
      }
    },
    save(event) {
      let attr = event.currentTarget.dataset.attr;
      this.$set(this.allAttr, attr, false);
    },
    quit(event) {
      let attr = event.currentTarget.dataset.attr;
      this.$set(this.allAttr, attr, false);
    },
  },
  components: {
    editButton,
    mySelect,
  },
};
</script>

<style lang="scss" scoped>
@import '../../common/scss/mixin';

.user-info-form-module {
  margin: 10px 0 100px 0;
  position: relative;
  form {
    padding: 30px 0;
    @include border-bottom($is-list: false);
    label {
      position: absolute;
      left: 0;
      line-height: 36px;
      font-size: 15px;
      font-weight: 700;
      color: #333;
    }
    .content {
      padding: 0 64px 0 140px;
      line-height: 36px;
      font-size: 15px;
      color: #262626;
      &.sex {
        .m-radio {
          margin: 3px 3px 0 5px;
        }
        .f-radio {
          margin: 3px 3px 0 30px;
        }
      }
      &.brief-desc {
        .edit-brief-desc {
          display: flex;
          width: 540px;
          height: 34px;
          line-height: 36px;
          padding: 4px 10px;
          font-size: 14px;
          background: #fff;
          border: 1px solid #e7eaf1;
          border-radius: 3px;
          box-sizing: border-box;
          transition: border .2s ease;
          &.focus {
            border: 1px solid #9fadc7;
          }
          .input-brief-desc {
            height: 24px;
            width: 100%;
            line-height: 24px;
          }
        }
      }
      &.desc {
        .edit-desc {
          display: block;
          width: 540px;
          padding: 4px 10px;
          font-family: inherit;
          font-size: 14px;
          font-weight: inherit;
          line-height: 26px;
          background: #fafafa;
          border: 1px solid #e7e7e7;
          border-radius: 3px;
          outline: none;
          box-sizing: border-box;
          transition: background .2s;
          resize: none;
          &:focus {
            background: #fff;
          }
        }
      }
    }

    .save-or-quite {
      display: inline-block;
      margin-top: 24px;
      .button {
        padding: 0 16px;
        line-height: 32px;
        border-radius: 3px;
        font-size: 14px;
        &.save {
          background: #0f88eb;
          border: 1px solid #0f88eb;
          color: #fff;
        }
        &.quit {
          margin-left: 16px;
          color: #8590a6;
          border: 1px solid #ccd8e1;
        }
      }
    }
  }
}
</style>
