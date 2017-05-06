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
        <div v-if="allAttr['briefDesc']" class="input-wrapper input-brief-desc">
          <input class="input briefDescHook" type="text" :value="userInfo.briefDesc" @focus="toggleFocus($event)" @blur="toggleFocus($event)">
        </div>
        <span v-if="allAttr['briefDesc']" class="save-or-quite"><button class="button save" data-attr="briefDesc" @click.prevent="save($event)">保存</button><button class="button quit" data-attr="briefDesc" @click.prevent="quit($event)">取消</button></span>
      </div>
    </form>
    <form>
      <label for="居住地">居住地</label>
      <div class="content address">
        <button v-if="!allAttr['address']" class="add" @click="editAttr('address')">
          <svg viewBox="0 0 18 18" class="Icon AddButton-icon Icon--add Icon--left" width="20" height="20" aria-hidden="true" style="height: 20px; width: 20px;">
            <title></title>
            <g>
              <g fill-rule="evenodd">
                <path d="M6.035 16.433c-.875-.35-1.678-.848-2.383-1.482-.205-.184-.52-.167-.707.04-.185.204-.167.52.038.705.794.714 1.696 1.274 2.682 1.668.06.023.123.035.185.035.198 0 .386-.12.464-.314.103-.258-.022-.55-.28-.65zM1.097 10.247C1.054 9.975.8 9.79.525 9.83c-.273.043-.46.3-.417.57.154.98.467 1.925.93 2.803.09.17.264.267.443.267.08 0 .16-.02.234-.058.244-.13.338-.432.208-.676-.41-.78-.69-1.618-.825-2.49zM9.106 1c.95.014 1.878.19 2.76.528.058.022.118.033.178.033.2 0 .39-.12.467-.32.1-.258-.03-.547-.287-.646C11.233.214 10.19.014 9.12 0h-.007c-.273 0-.496.22-.5.493-.003.278.218.504.493.508zM3.73 2.83c.108 0 .218-.034.31-.107.693-.55 1.465-.976 2.295-1.27.26-.09.397-.377.305-.637C6.548.556 6.263.42 6.002.51 5.068.84 4.2 1.323 3.42 1.94c-.217.17-.254.485-.083.702.1.124.245.19.393.19zM2.01 4.136c-.236-.144-.544-.07-.688.165-.557.91-.945 1.9-1.15 2.944-.055.27.12.534.392.587.033.008.065.01.098.01.234 0 .443-.164.49-.402.184-.927.528-1.807 1.023-2.614.144-.236.07-.543-.165-.688zM14.927 2.228c-.207-.183-.523-.162-.705.047-.182.208-.16.523.047.706.664.583 1.224 1.265 1.665 2.028.092.16.26.25.433.25.085 0 .17-.02.25-.067.24-.137.32-.443.183-.682-.495-.86-1.125-1.626-1.873-2.28zM17.294 7.07c-.27.047-.454.306-.408.578.076.44.114.896.114 1.35 0 .493-.046.984-.133 1.46-.05.27.13.532.402.582.03.005.06.008.09.008.236 0 .446-.17.49-.41.1-.534.148-1.085.15-1.638 0-.513-.044-1.025-.13-1.52-.045-.273-.303-.457-.576-.41zM16.566 12.91c-.235-.14-.544-.065-.686.174-.452.76-1.02 1.434-1.692 2.005-.21.18-.235.494-.057.704.1.116.24.176.382.176.115 0 .23-.04.324-.12.754-.643 1.395-1.4 1.903-2.254.142-.238.064-.544-.174-.686zM11.766 16.51c-.884.325-1.814.49-2.772.49l-.208-.002c-.283-.02-.505.21-.513.487-.007.275.21.506.487.513L9 18c1.07 0 2.116-.186 3.11-.553.26-.095.393-.383.297-.642-.095-.26-.385-.392-.64-.295zM9.8 8.2V6.3c0-.442-.358-.8-.8-.8-.442 0-.8.358-.8.8v1.9H6.3c-.442 0-.8.358-.8.8 0 .442.358.8.8.8h1.9v1.9c0 .442.358.8.8.8.442 0 .8-.358.8-.8V9.8h1.9c.442 0 .8-.358.8-.8 0-.442-.358-.8-.8-.8H9.8z"></path>
              </g>
            </g>
          </svg>
          添加居住地
        </button>
        <div v-if="allAttr['address']" class="edit-address">
          <div class="input-wrapper input-address">
            <input class="input addressHook" type="text" @focus="toggleFocus($event)" @blur="toggleFocus($event)" placeholder="添加居住地">
          </div>
          <span v-if="allAttr['address']" class="save-or-quite inline"><button class="button save" data-attr="address" @click.prevent="save($event)">保存</button><button class="button quit" data-attr="address" @click.prevent="quit($event)">取消</button></span>
        </div>

        <div class="field-list">
          <div v-for="address in userInfo.address" class="address" @dragover="resolveDropOver" @dragenter="resolveEnter" data-label="address">
            <div class="field-card" @dragstart="resolveDrag" draggable="true">
              <img :src="address.avatar" width="20" height="20" alt="地址图片">
              <span class="local">{{address.local}}</span>
              <svg viewBox="0 0 14 14" height="16" aria-hidden="true" style="height: 16px; width: 10px;">
                <title></title>
                <g>
                  <path d="M8.486 7l5.208-5.207c.408-.408.405-1.072-.006-1.483-.413-.413-1.074-.413-1.482-.005L7 5.515 1.793.304C1.385-.103.72-.1.31.31-.103.724-.103 1.385.305 1.793L5.515 7l-5.21 5.207c-.407.408-.404 1.072.007 1.483.413.413 1.074.413 1.482.005L7 8.485l5.207 5.21c.408.407 1.072.404 1.483-.007.413-.413.413-1.074.005-1.482L8.485 7z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
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
      <div class="content career">
        <button v-if="!allAttr['career']" class="add" @click="editAttr('career')">
          <svg viewBox="0 0 18 18" width="20" height="20" style="height: 20px; width: 20px;">
            <title></title>
            <g>
              <g fill-rule="evenodd">
                <path d="M6.035 16.433c-.875-.35-1.678-.848-2.383-1.482-.205-.184-.52-.167-.707.04-.185.204-.167.52.038.705.794.714 1.696 1.274 2.682 1.668.06.023.123.035.185.035.198 0 .386-.12.464-.314.103-.258-.022-.55-.28-.65zM1.097 10.247C1.054 9.975.8 9.79.525 9.83c-.273.043-.46.3-.417.57.154.98.467 1.925.93 2.803.09.17.264.267.443.267.08 0 .16-.02.234-.058.244-.13.338-.432.208-.676-.41-.78-.69-1.618-.825-2.49zM9.106 1c.95.014 1.878.19 2.76.528.058.022.118.033.178.033.2 0 .39-.12.467-.32.1-.258-.03-.547-.287-.646C11.233.214 10.19.014 9.12 0h-.007c-.273 0-.496.22-.5.493-.003.278.218.504.493.508zM3.73 2.83c.108 0 .218-.034.31-.107.693-.55 1.465-.976 2.295-1.27.26-.09.397-.377.305-.637C6.548.556 6.263.42 6.002.51 5.068.84 4.2 1.323 3.42 1.94c-.217.17-.254.485-.083.702.1.124.245.19.393.19zM2.01 4.136c-.236-.144-.544-.07-.688.165-.557.91-.945 1.9-1.15 2.944-.055.27.12.534.392.587.033.008.065.01.098.01.234 0 .443-.164.49-.402.184-.927.528-1.807 1.023-2.614.144-.236.07-.543-.165-.688zM14.927 2.228c-.207-.183-.523-.162-.705.047-.182.208-.16.523.047.706.664.583 1.224 1.265 1.665 2.028.092.16.26.25.433.25.085 0 .17-.02.25-.067.24-.137.32-.443.183-.682-.495-.86-1.125-1.626-1.873-2.28zM17.294 7.07c-.27.047-.454.306-.408.578.076.44.114.896.114 1.35 0 .493-.046.984-.133 1.46-.05.27.13.532.402.582.03.005.06.008.09.008.236 0 .446-.17.49-.41.1-.534.148-1.085.15-1.638 0-.513-.044-1.025-.13-1.52-.045-.273-.303-.457-.576-.41zM16.566 12.91c-.235-.14-.544-.065-.686.174-.452.76-1.02 1.434-1.692 2.005-.21.18-.235.494-.057.704.1.116.24.176.382.176.115 0 .23-.04.324-.12.754-.643 1.395-1.4 1.903-2.254.142-.238.064-.544-.174-.686zM11.766 16.51c-.884.325-1.814.49-2.772.49l-.208-.002c-.283-.02-.505.21-.513.487-.007.275.21.506.487.513L9 18c1.07 0 2.116-.186 3.11-.553.26-.095.393-.383.297-.642-.095-.26-.385-.392-.64-.295zM9.8 8.2V6.3c0-.442-.358-.8-.8-.8-.442 0-.8.358-.8.8v1.9H6.3c-.442 0-.8.358-.8.8 0 .442.358.8.8.8h1.9v1.9c0 .442.358.8.8.8.442 0 .8-.358.8-.8V9.8h1.9c.442 0 .8-.358.8-.8 0-.442-.358-.8-.8-.8H9.8z"></path>
              </g>
            </g>
          </svg>
          添加职业经历
        </button>
        <div v-if="allAttr['career']" class="edit-career">
          <div class="input-wrapper input-company-name">
            <input class="input" type="text" @focus="toggleFocus($event)" @blur="toggleFocus($event)" placeholder="公司或组织名称">
          </div>
          <div class="input-wrapper input-post">
            <input class="input" type="text" @focus="toggleFocus($event)" @blur="toggleFocus($event)" placeholder="你的职位（选填）">
          </div>
          <span class="save-or-quite inline"><button class="button save" data-attr="career" @click.prevent="save($event)">保存</button><button class="button quit" data-attr="career" @click.prevent="quit($event)">取消</button></span>
        </div>
        <div class="field-list">
          <div v-for="career in userInfo.careers" class="career" @dragover="resolveDropOver" @dragenter="resolveEnter" data-label="career">
            <div class="field-card" @dragstart="resolveDrag" draggable="true">
              <img :src="career.avatar" width="20" height="20" alt="职业图片">
              <span>{{career.companyName}}<span class="field-dot">·</span>{{career.post}}</span>
              <svg viewBox="0 0 14 14" height="16" aria-hidden="true" style="height: 16px; width: 10px;">
                <title></title>
                <g>
                  <path d="M8.486 7l5.208-5.207c.408-.408.405-1.072-.006-1.483-.413-.413-1.074-.413-1.482-.005L7 5.515 1.793.304C1.385-.103.72-.1.31.31-.103.724-.103 1.385.305 1.793L5.515 7l-5.21 5.207c-.407.408-.404 1.072.007 1.483.413.413 1.074.413 1.482.005L7 8.485l5.207 5.21c.408.407 1.072.404 1.483-.007.413-.413.413-1.074.005-1.482L8.485 7z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </form>
    <form>
      <label for="教育经历">教育经历</label>
      <div class="content education">
        <button v-if="!allAttr['education']" class="add" @click="editAttr('education')">
          <svg viewBox="0 0 18 18" width="20" height="20" style="height: 20px; width: 20px;">
            <title></title>
            <g>
              <g fill-rule="evenodd">
                <path d="M6.035 16.433c-.875-.35-1.678-.848-2.383-1.482-.205-.184-.52-.167-.707.04-.185.204-.167.52.038.705.794.714 1.696 1.274 2.682 1.668.06.023.123.035.185.035.198 0 .386-.12.464-.314.103-.258-.022-.55-.28-.65zM1.097 10.247C1.054 9.975.8 9.79.525 9.83c-.273.043-.46.3-.417.57.154.98.467 1.925.93 2.803.09.17.264.267.443.267.08 0 .16-.02.234-.058.244-.13.338-.432.208-.676-.41-.78-.69-1.618-.825-2.49zM9.106 1c.95.014 1.878.19 2.76.528.058.022.118.033.178.033.2 0 .39-.12.467-.32.1-.258-.03-.547-.287-.646C11.233.214 10.19.014 9.12 0h-.007c-.273 0-.496.22-.5.493-.003.278.218.504.493.508zM3.73 2.83c.108 0 .218-.034.31-.107.693-.55 1.465-.976 2.295-1.27.26-.09.397-.377.305-.637C6.548.556 6.263.42 6.002.51 5.068.84 4.2 1.323 3.42 1.94c-.217.17-.254.485-.083.702.1.124.245.19.393.19zM2.01 4.136c-.236-.144-.544-.07-.688.165-.557.91-.945 1.9-1.15 2.944-.055.27.12.534.392.587.033.008.065.01.098.01.234 0 .443-.164.49-.402.184-.927.528-1.807 1.023-2.614.144-.236.07-.543-.165-.688zM14.927 2.228c-.207-.183-.523-.162-.705.047-.182.208-.16.523.047.706.664.583 1.224 1.265 1.665 2.028.092.16.26.25.433.25.085 0 .17-.02.25-.067.24-.137.32-.443.183-.682-.495-.86-1.125-1.626-1.873-2.28zM17.294 7.07c-.27.047-.454.306-.408.578.076.44.114.896.114 1.35 0 .493-.046.984-.133 1.46-.05.27.13.532.402.582.03.005.06.008.09.008.236 0 .446-.17.49-.41.1-.534.148-1.085.15-1.638 0-.513-.044-1.025-.13-1.52-.045-.273-.303-.457-.576-.41zM16.566 12.91c-.235-.14-.544-.065-.686.174-.452.76-1.02 1.434-1.692 2.005-.21.18-.235.494-.057.704.1.116.24.176.382.176.115 0 .23-.04.324-.12.754-.643 1.395-1.4 1.903-2.254.142-.238.064-.544-.174-.686zM11.766 16.51c-.884.325-1.814.49-2.772.49l-.208-.002c-.283-.02-.505.21-.513.487-.007.275.21.506.487.513L9 18c1.07 0 2.116-.186 3.11-.553.26-.095.393-.383.297-.642-.095-.26-.385-.392-.64-.295zM9.8 8.2V6.3c0-.442-.358-.8-.8-.8-.442 0-.8.358-.8.8v1.9H6.3c-.442 0-.8.358-.8.8 0 .442.358.8.8.8h1.9v1.9c0 .442.358.8.8.8.442 0 .8-.358.8-.8V9.8h1.9c.442 0 .8-.358.8-.8 0-.442-.358-.8-.8-.8H9.8z"></path>
              </g>
            </g>
          </svg>
          添加教育经历
        </button>
        <div v-if="allAttr['education']" class="edit-education">
          <div class="input-wrapper input-school-name">
            <input class="input" type="text" @focus="toggleFocus($event)" @blur="toggleFocus($event)" placeholder="学校或教育机构名">
          </div>
          <div class="input-wrapper input-profession">
            <input class="input" type="text" @focus="toggleFocus($event)" @blur="toggleFocus($event)" placeholder="专业方向（选填）">
          </div>
          <span class="save-or-quite inline"><button class="button save" data-attr="education" @click.prevent="save($event)">保存</button><button class="button quit" data-attr="education" @click.prevent="quit($event)">取消</button></span>
        </div>
        <div class="field-list">
          <div class="education" v-for="education in userInfo.educations" @dragover="resolveDropOver" @dragenter="resolveEnter" data-label="education">
            <div class="field-card" @dragstart="resolveDrag" draggable="true">
              <img :src="education.avatar" alt="学校图片" width="20" height="20">
              <span class="school">{{education.school}}<span class="field-dot">·</span>{{education.profession}}</span>
              <svg viewBox="0 0 14 14" height="16" aria-hidden="true" style="height: 16px; width: 10px;">
                <title></title>
                <g>
                  <path d="M8.486 7l5.208-5.207c.408-.408.405-1.072-.006-1.483-.413-.413-1.074-.413-1.482-.005L7 5.515 1.793.304C1.385-.103.72-.1.31.31-.103.724-.103 1.385.305 1.793L5.515 7l-5.21 5.207c-.407.408-.404 1.072.007 1.483.413.413 1.074.413 1.482.005L7 8.485l5.207 5.21c.408.407 1.072.404 1.483-.007.413-.413.413-1.074.005-1.482L8.485 7z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
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
        cntDragNode: null,
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
      if (attr === 'briefDesc' || attr === 'desc' || attr === 'address') {
        this.$nextTick(() => {
          document.querySelector(`.${attr}Hook`).focus();
        });
      }
    },
    resolveDropOver(e) {
      if (e.currentTarget.dataset.label === this.cntDragNode.parentNode.dataset.label) {
        e.preventDefault();
      }
    },
    resolveEnter(e) {
      if (e.currentTarget.dataset.label === this.cntDragNode.parentNode.dataset.label) {
        let nparent = e.currentTarget;
        this.cntDragNode.parentNode.appendChild(e.currentTarget.children[0]);
        nparent.appendChild(this.cntDragNode);
        e.preventDefault();
      }
    },
    resolveDrag(e) {
      this.cntDragNode = e.currentTarget;
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
// 一个input框的UI
.input-wrapper {
  display: flex;
  height: 34px;
  line-height: 36px;
  padding: 4px 10px;
  font-size: 14px;
  background: #fff;
  border: 1px solid #e7eaf1;
  border-radius: 3px;
  box-sizing: border-box;
  transition: border .2s ease;
  &:not(:first-child) {
    margin-left: 16px;
  }
  &.focus {
    border: 1px solid #9fadc7;
  }
  .input {
    height: 24px;
    width: 100%;
    line-height: 24px;
  }
}

// 一个
.add {
  display: flex;
  font-size: 14px;
  line-height: inherit;
  align-items: center;
  color: #175199;
  svg {
    margin-right: 6px;
  }
}

// 元素列表样式
.field-list {
  margin: 20px -10px 0;
}

.field-card {
  position: relative;
  display: flex;
  align-items: center;
  width: 440px;
  padding: 8px 10px;
  line-height: 24px;
  cursor: move;
  &:hover {
    background: #f7f8fa;
    border-radius: 4px;
  }
  svg {
    cursor: pointer;
    vertical-align: text-bottom;
    fill: #9fadc7;
    margin-left: auto;
  }
}

.field-dot {
  margin: 0 12px 0 8px;
}

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
        .input-brief-desc {
          width: 540px;
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
      &.address {
        .edit-address {
          display: flex;
        }
        .input-address {
          width: 180px;
        }
        img {
          margin-right: 12px;
        }
      }
      &.career {
        .edit-career {
          display: flex;
          .input-company-name {
            width: 180px;
          }
          .input-post {
            width: 180px;
          }
        }
        img {
          margin-right: 12px;
        }
      }
      &.education {
        .edit-education {
          display: flex;
          .input-school-name {
            width: 180px;
          }
          .input-profession {
            width: 180px;
          }
        }
        img {
          margin-right: 12px;
        }
      }
    }

    .save-or-quite {
      display: inline-block;
      margin-top: 24px;
      &.inline {
        margin: 0 0 0 24px;
      }
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
