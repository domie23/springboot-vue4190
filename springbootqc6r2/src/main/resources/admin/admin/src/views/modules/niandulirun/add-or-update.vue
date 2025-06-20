<template>
  <div class="addEdit-block">
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
	  :style="{backgroundColor:addEditForm.addEditBoxColor}"
    >
      <el-row >
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="年度统计" prop="niandutongji">
          <el-input v-model="ruleForm.niandutongji" 
              placeholder="年度统计" clearable  :readonly="ro.niandutongji"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="年度统计" prop="niandutongji">
              <el-input v-model="ruleForm.niandutongji" 
                placeholder="年度统计" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="主营收入" prop="zhuyingshouru">
          <el-input v-model="ruleForm.zhuyingshouru" 
              placeholder="主营收入" clearable  :readonly="ro.zhuyingshouru"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="主营收入" prop="zhuyingshouru">
              <el-input v-model="ruleForm.zhuyingshouru" 
                placeholder="主营收入" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="主营业务成本" prop="zhuyingyewuchengben">
          <el-input v-model="ruleForm.zhuyingyewuchengben" 
              placeholder="主营业务成本" clearable  :readonly="ro.zhuyingyewuchengben"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="主营业务成本" prop="zhuyingyewuchengben">
              <el-input v-model="ruleForm.zhuyingyewuchengben" 
                placeholder="主营业务成本" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="主营业务税金及附加" prop="zhuyingyewushuijinjifujia">
          <el-input v-model="ruleForm.zhuyingyewushuijinjifujia" 
              placeholder="主营业务税金及附加" clearable  :readonly="ro.zhuyingyewushuijinjifujia"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="主营业务税金及附加" prop="zhuyingyewushuijinjifujia">
              <el-input v-model="ruleForm.zhuyingyewushuijinjifujia" 
                placeholder="主营业务税金及附加" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="其他业务利润" prop="qitayewulirun">
          <el-input v-model="ruleForm.qitayewulirun" 
              placeholder="其他业务利润" clearable  :readonly="ro.qitayewulirun"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="其他业务利润" prop="qitayewulirun">
              <el-input v-model="ruleForm.qitayewulirun" 
                placeholder="其他业务利润" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="营业费用" prop="yingyefeiyong">
          <el-input v-model="ruleForm.yingyefeiyong" 
              placeholder="营业费用" clearable  :readonly="ro.yingyefeiyong"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="营业费用" prop="yingyefeiyong">
              <el-input v-model="ruleForm.yingyefeiyong" 
                placeholder="营业费用" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="管理费用" prop="guanlifeiyong">
          <el-input v-model="ruleForm.guanlifeiyong" 
              placeholder="管理费用" clearable  :readonly="ro.guanlifeiyong"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="管理费用" prop="guanlifeiyong">
              <el-input v-model="ruleForm.guanlifeiyong" 
                placeholder="管理费用" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="财务费用" prop="caiwufeiyong">
          <el-input v-model="ruleForm.caiwufeiyong" 
              placeholder="财务费用" clearable  :readonly="ro.caiwufeiyong"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="财务费用" prop="caiwufeiyong">
              <el-input v-model="ruleForm.caiwufeiyong" 
                placeholder="财务费用" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="投资收益" prop="touzishouyi">
          <el-input v-model="ruleForm.touzishouyi" 
              placeholder="投资收益" clearable  :readonly="ro.touzishouyi"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="投资收益" prop="touzishouyi">
              <el-input v-model="ruleForm.touzishouyi" 
                placeholder="投资收益" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="补贴收益" prop="butieshouyi">
          <el-input v-model="ruleForm.butieshouyi" 
              placeholder="补贴收益" clearable  :readonly="ro.butieshouyi"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="补贴收益" prop="butieshouyi">
              <el-input v-model="ruleForm.butieshouyi" 
                placeholder="补贴收益" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="营业外收入" prop="yingyewaishouru">
          <el-input v-model="ruleForm.yingyewaishouru" 
              placeholder="营业外收入" clearable  :readonly="ro.yingyewaishouru"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="营业外收入" prop="yingyewaishouru">
              <el-input v-model="ruleForm.yingyewaishouru" 
                placeholder="营业外收入" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="营业外支出" prop="yingyewaizhichu">
          <el-input v-model="ruleForm.yingyewaizhichu" 
              placeholder="营业外支出" clearable  :readonly="ro.yingyewaizhichu"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="营业外支出" prop="yingyewaizhichu">
              <el-input v-model="ruleForm.yingyewaizhichu" 
                placeholder="营业外支出" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="所得税" prop="suodeshui">
          <el-input v-model="ruleForm.suodeshui" 
              placeholder="所得税" clearable  :readonly="ro.suodeshui"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="所得税" prop="suodeshui">
              <el-input v-model="ruleForm.suodeshui" 
                placeholder="所得税" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'" label="净利润" prop="jinglirun">
            <el-input v-model="jinglirun"
                placeholder="净利润" readonly></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.jinglirun" label="净利润" prop="jinglirun">
              <el-input v-model="ruleForm.jinglirun" 
                placeholder="净利润" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="date" v-if="type!='info'" label="登记时间" prop="dengjishijian">
            <el-date-picker
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="ruleForm.dengjishijian" 
                type="date"
                :readonly="ro.dengjishijian"
                placeholder="登记时间">
            </el-date-picker> 
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.dengjishijian" label="登记时间" prop="dengjishijian">
              <el-input v-model="ruleForm.dengjishijian" 
                placeholder="登记时间" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      </el-row>
      <el-form-item class="btn">
        <el-button  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
        <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
        <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
  data() {
    let self = this
    var validateIdCard = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!checkIdCard(value)) {
        callback(new Error("请输入正确的身份证号码"));
      } else {
        callback();
      }
    };
    var validateUrl = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isURL(value)) {
        callback(new Error("请输入正确的URL地址"));
      } else {
        callback();
      }
    };
    var validateMobile = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isMobile(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isPhone(value)) {
        callback(new Error("请输入正确的电话号码"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isEmail(value)) {
        callback(new Error("请输入正确的邮箱地址"));
      } else {
        callback();
      }
    };
    var validateNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isNumber(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };
    var validateIntNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isIntNumer(value)) {
        callback(new Error("请输入整数"));
      } else {
        callback();
      }
    };
    return {
	  addEditForm: {"btnSaveFontColor":"#fff","selectFontSize":"14px","btnCancelBorderColor":"#DCDFE6","inputBorderRadius":"4px","inputFontSize":"14px","textareaBgColor":"#fff","btnSaveFontSize":"14px","textareaBorderRadius":"4px","uploadBgColor":"#fff","textareaBorderStyle":"solid","btnCancelWidth":"88px","textareaHeight":"120px","dateBgColor":"#fff","btnSaveBorderRadius":"4px","uploadLableFontSize":"14px","textareaBorderWidth":"3px","inputLableColor":"rgba(0, 0, 0, 1)","addEditBoxColor":"rgba(255, 255, 255, 0)","dateIconFontSize":"14px","btnSaveBgColor":"rgba(64, 158, 255, 1)","uploadIconFontColor":"rgba(119, 197, 227, 1)","textareaBorderColor":"rgba(119, 197, 227, 1)","btnCancelBgColor":"rgba(64, 158, 255, 1)","selectLableColor":"rgba(0, 0, 0, 1)","btnSaveBorderStyle":"solid","dateBorderWidth":"3px","dateLableFontSize":"14px","dateBorderRadius":"4px","btnCancelBorderStyle":"solid","selectLableFontSize":"14px","selectBorderStyle":"solid","selectIconFontColor":"rgba(0, 0, 0, 1)","btnCancelHeight":"44px","inputHeight":"45px","btnCancelFontColor":"rgba(255, 255, 255, 1)","dateBorderColor":"rgba(119, 197, 227, 1)","dateIconFontColor":"rgba(0, 0, 0, 1)","uploadBorderStyle":"solid","dateBorderStyle":"solid","dateLableColor":"rgba(0, 4, 11, 1)","dateFontSize":"14px","inputBorderWidth":"3px","uploadIconFontSize":"28px","selectHeight":"40px","inputFontColor":"rgba(0, 0, 0, 1)","uploadHeight":"148px","textareaLableColor":"rgba(0, 0, 0, 1)","textareaLableFontSize":"14px","btnCancelFontSize":"14px","inputBorderStyle":"solid","btnCancelBorderRadius":"4px","inputBgColor":"#fff","inputLableFontSize":"14px","uploadLableColor":"rgba(0, 0, 0, 1)","uploadBorderRadius":"4px","btnSaveHeight":"44px","selectBgColor":"#fff","btnSaveWidth":"88px","selectIconFontSize":"14px","dateHeight":"45px","selectBorderColor":"rgba(119, 197, 227, 1)","inputBorderColor":"rgba(119, 197, 227, 1)","uploadBorderColor":"rgba(119, 197, 227, 1)","textareaFontColor":"rgba(0, 0, 0, 1)","selectBorderWidth":"3px","dateFontColor":"rgba(0, 1, 2, 1)","btnCancelBorderWidth":"0","uploadBorderWidth":"3px","textareaFontSize":"15px","selectBorderRadius":"4px","selectFontColor":"rgba(0, 0, 0, 1)","btnSaveBorderColor":"rgba(64, 158, 255, 1)","btnSaveBorderWidth":"0"},
      id: '',
      type: '',
      ro:{
	niandutongji : false,
	zhuyingshouru : false,
	zhuyingyewuchengben : false,
	zhuyingyewushuijinjifujia : false,
	qitayewulirun : false,
	yingyefeiyong : false,
	guanlifeiyong : false,
	caiwufeiyong : false,
	touzishouyi : false,
	butieshouyi : false,
	yingyewaishouru : false,
	yingyewaizhichu : false,
	suodeshui : false,
	jinglirun : false,
	dengjishijian : false,
      },
      ruleForm: {
        niandutongji: '',
        zhuyingshouru: '',
        zhuyingyewuchengben: '',
        zhuyingyewushuijinjifujia: '',
        qitayewulirun: '',
        yingyefeiyong: '',
        guanlifeiyong: '',
        caiwufeiyong: '',
        touzishouyi: '',
        butieshouyi: '',
        yingyewaishouru: '',
        yingyewaizhichu: '',
        suodeshui: '',
        jinglirun: '',
        dengjishijian: '',
      },
      rules: {
          niandutongji: [
          ],
          zhuyingshouru: [
                { validator: validateNumber, trigger: 'blur' },
          ],
          zhuyingyewuchengben: [
                { validator: validateIntNumber, trigger: 'blur' },
          ],
          zhuyingyewushuijinjifujia: [
                { validator: validateIntNumber, trigger: 'blur' },
          ],
          qitayewulirun: [
                { validator: validateIntNumber, trigger: 'blur' },
          ],
          yingyefeiyong: [
                { validator: validateIntNumber, trigger: 'blur' },
          ],
          guanlifeiyong: [
                { validator: validateIntNumber, trigger: 'blur' },
          ],
          caiwufeiyong: [
                { validator: validateIntNumber, trigger: 'blur' },
          ],
          touzishouyi: [
                { validator: validateIntNumber, trigger: 'blur' },
          ],
          butieshouyi: [
                { validator: validateIntNumber, trigger: 'blur' },
          ],
          yingyewaishouru: [
                { validator: validateIntNumber, trigger: 'blur' },
          ],
          yingyewaizhichu: [
                { validator: validateIntNumber, trigger: 'blur' },
          ],
          suodeshui: [
                { validator: validateIntNumber, trigger: 'blur' },
          ],
          jinglirun: [
                { validator: validateIntNumber, trigger: 'blur' },
          ],
          dengjishijian: [
          ],
      }
    };
  },
  props: ["parent"],
  computed: {
    jinglirun: {
      get: function () {
        return 0+parseFloat(this.ruleForm.zhuyingshouru==""?0:this.ruleForm.zhuyingshouru)-parseFloat(this.ruleForm.zhuyingyewuchengben==""?0:this.ruleForm.zhuyingyewuchengben)-parseFloat(this.ruleForm.zhuyingyewushuijinjifujia==""?0:this.ruleForm.zhuyingyewushuijinjifujia)+parseFloat(this.ruleForm.qitayewulirun==""?0:this.ruleForm.qitayewulirun)-parseFloat(this.ruleForm.yingyefeiyong==""?0:this.ruleForm.yingyefeiyong)-parseFloat(this.ruleForm.guanlifeiyong==""?0:this.ruleForm.guanlifeiyong)-parseFloat(this.ruleForm.caiwufeiyong==""?0:this.ruleForm.caiwufeiyong)+parseFloat(this.ruleForm.touzishouyi==""?0:this.ruleForm.touzishouyi)+parseFloat(this.ruleForm.butieshouyi==""?0:this.ruleForm.butieshouyi)+parseFloat(this.ruleForm.yingyewaishouru==""?0:this.ruleForm.yingyewaishouru)-parseFloat(this.ruleForm.yingyewaizhichu==""?0:this.ruleForm.yingyewaizhichu)-parseFloat(this.ruleForm.suodeshui==""?0:this.ruleForm.suodeshui) || 0
      }
    },



  },
  created() {
	this.ruleForm.dengjishijian = this.getCurDate()
	this.addEditStyleChange()
	this.addEditUploadStyleChange()
  },
  methods: {
    // 下载
    download(file){
      window.open(`${file}`)
    },
    // 初始化
    init(id,type) {
      if (id) {
        this.id = id;
        this.type = type;
      }
      if(this.type=='info'||this.type=='else'){
        this.info(id);
      }else if(this.type=='logistics'){
        this.logistics=false;
        this.info(id);
      }else if(this.type=='cross'){
        var obj = this.$storage.getObj('crossObj');
        for (var o in obj){
          if(o=='niandutongji'){
            this.ruleForm.niandutongji = obj[o];
	    this.ro.niandutongji = true;
            continue;
          }
          if(o=='zhuyingshouru'){
            this.ruleForm.zhuyingshouru = obj[o];
	    this.ro.zhuyingshouru = true;
            continue;
          }
          if(o=='zhuyingyewuchengben'){
            this.ruleForm.zhuyingyewuchengben = obj[o];
	    this.ro.zhuyingyewuchengben = true;
            continue;
          }
          if(o=='zhuyingyewushuijinjifujia'){
            this.ruleForm.zhuyingyewushuijinjifujia = obj[o];
	    this.ro.zhuyingyewushuijinjifujia = true;
            continue;
          }
          if(o=='qitayewulirun'){
            this.ruleForm.qitayewulirun = obj[o];
	    this.ro.qitayewulirun = true;
            continue;
          }
          if(o=='yingyefeiyong'){
            this.ruleForm.yingyefeiyong = obj[o];
	    this.ro.yingyefeiyong = true;
            continue;
          }
          if(o=='guanlifeiyong'){
            this.ruleForm.guanlifeiyong = obj[o];
	    this.ro.guanlifeiyong = true;
            continue;
          }
          if(o=='caiwufeiyong'){
            this.ruleForm.caiwufeiyong = obj[o];
	    this.ro.caiwufeiyong = true;
            continue;
          }
          if(o=='touzishouyi'){
            this.ruleForm.touzishouyi = obj[o];
	    this.ro.touzishouyi = true;
            continue;
          }
          if(o=='butieshouyi'){
            this.ruleForm.butieshouyi = obj[o];
	    this.ro.butieshouyi = true;
            continue;
          }
          if(o=='yingyewaishouru'){
            this.ruleForm.yingyewaishouru = obj[o];
	    this.ro.yingyewaishouru = true;
            continue;
          }
          if(o=='yingyewaizhichu'){
            this.ruleForm.yingyewaizhichu = obj[o];
	    this.ro.yingyewaizhichu = true;
            continue;
          }
          if(o=='suodeshui'){
            this.ruleForm.suodeshui = obj[o];
	    this.ro.suodeshui = true;
            continue;
          }
          if(o=='jinglirun'){
            this.ruleForm.jinglirun = obj[o];
	    this.ro.jinglirun = true;
            continue;
          }
          if(o=='dengjishijian'){
            this.ruleForm.dengjishijian = obj[o];
	    this.ro.dengjishijian = true;
            continue;
          }
        }
      }
      // 获取用户信息
      this.$http({
        url: `${this.$storage.get('sessionTable')}/session`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
          var json = data.data;
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    // 多级联动参数
    info(id) {
      this.$http({
        url: `niandulirun/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
	//解决前台上传图片后台不显示的问题
	let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {
        this.ruleForm.jinglirun = this.jinglirun































var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(!statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "niandulirun/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `niandulirun/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.niandulirunCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `niandulirun/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.niandulirunCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.niandulirunCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
	addEditStyleChange() {
	  this.$nextTick(()=>{
	    // input
	    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputFontColor
	      el.style.fontSize = this.addEditForm.inputFontSize
	      el.style.borderWidth = this.addEditForm.inputBorderWidth
	      el.style.borderStyle = this.addEditForm.inputBorderStyle
	      el.style.borderColor = this.addEditForm.inputBorderColor
	      el.style.borderRadius = this.addEditForm.inputBorderRadius
	      el.style.backgroundColor = this.addEditForm.inputBgColor
	    })
	    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputLableColor
	      el.style.fontSize = this.addEditForm.inputLableFontSize
	    })
	    // select
	    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectFontColor
	      el.style.fontSize = this.addEditForm.selectFontSize
	      el.style.borderWidth = this.addEditForm.selectBorderWidth
	      el.style.borderStyle = this.addEditForm.selectBorderStyle
	      el.style.borderColor = this.addEditForm.selectBorderColor
	      el.style.borderRadius = this.addEditForm.selectBorderRadius
	      el.style.backgroundColor = this.addEditForm.selectBgColor
	    })
	    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectLableColor
	      el.style.fontSize = this.addEditForm.selectLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
	      el.style.color = this.addEditForm.selectIconFontColor
	      el.style.fontSize = this.addEditForm.selectIconFontSize
	    })
	    // date
	    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateFontColor
	      el.style.fontSize = this.addEditForm.dateFontSize
	      el.style.borderWidth = this.addEditForm.dateBorderWidth
	      el.style.borderStyle = this.addEditForm.dateBorderStyle
	      el.style.borderColor = this.addEditForm.dateBorderColor
	      el.style.borderRadius = this.addEditForm.dateBorderRadius
	      el.style.backgroundColor = this.addEditForm.dateBgColor
	    })
	    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateLableColor
	      el.style.fontSize = this.addEditForm.dateLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
	      el.style.color = this.addEditForm.dateIconFontColor
	      el.style.fontSize = this.addEditForm.dateIconFontSize
	      el.style.lineHeight = this.addEditForm.dateHeight
	    })
	    // upload
	    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
	    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
	      el.style.width = this.addEditForm.uploadHeight
	      el.style.height = this.addEditForm.uploadHeight
	      el.style.borderWidth = this.addEditForm.uploadBorderWidth
	      el.style.borderStyle = this.addEditForm.uploadBorderStyle
	      el.style.borderColor = this.addEditForm.uploadBorderColor
	      el.style.borderRadius = this.addEditForm.uploadBorderRadius
	      el.style.backgroundColor = this.addEditForm.uploadBgColor
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.uploadHeight
	      el.style.color = this.addEditForm.uploadLableColor
	      el.style.fontSize = this.addEditForm.uploadLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
	      el.style.color = this.addEditForm.uploadIconFontColor
	      el.style.fontSize = this.addEditForm.uploadIconFontSize
	      el.style.lineHeight = iconLineHeight
	      el.style.display = 'block'
	    })
	    // 多文本输入框
	    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
	      el.style.height = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaFontColor
	      el.style.fontSize = this.addEditForm.textareaFontSize
	      el.style.borderWidth = this.addEditForm.textareaBorderWidth
	      el.style.borderStyle = this.addEditForm.textareaBorderStyle
	      el.style.borderColor = this.addEditForm.textareaBorderColor
	      el.style.borderRadius = this.addEditForm.textareaBorderRadius
	      el.style.backgroundColor = this.addEditForm.textareaBgColor
	    })
	    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
	      // el.style.lineHeight = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaLableColor
	      el.style.fontSize = this.addEditForm.textareaLableFontSize
	    })
	    // 保存
	    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
	      el.style.width = this.addEditForm.btnSaveWidth
	      el.style.height = this.addEditForm.btnSaveHeight
	      el.style.color = this.addEditForm.btnSaveFontColor
	      el.style.fontSize = this.addEditForm.btnSaveFontSize
	      el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
	      el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
	      el.style.borderColor = this.addEditForm.btnSaveBorderColor
	      el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnSaveBgColor
	    })
	    // 返回
	    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
	      el.style.width = this.addEditForm.btnCancelWidth
	      el.style.height = this.addEditForm.btnCancelHeight
	      el.style.color = this.addEditForm.btnCancelFontColor
	      el.style.fontSize = this.addEditForm.btnCancelFontSize
	      el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
	      el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
	      el.style.borderColor = this.addEditForm.btnCancelBorderColor
	      el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnCancelBgColor
	    })
	  })
	},
	addEditUploadStyleChange() {
		this.$nextTick(()=>{
		  document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
			el.style.width = this.addEditForm.uploadHeight
			el.style.height = this.addEditForm.uploadHeight
			el.style.borderWidth = this.addEditForm.uploadBorderWidth
			el.style.borderStyle = this.addEditForm.uploadBorderStyle
			el.style.borderColor = this.addEditForm.uploadBorderColor
			el.style.borderRadius = this.addEditForm.uploadBorderRadius
			el.style.backgroundColor = this.addEditForm.uploadBgColor
		  })
	  })
	},
  }
};
</script>
<style lang="scss">
.editor{
  height: 500px;
  
  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
	background-color: transparent;
}
.btn .el-button {
  padding: 0;
}
</style>
