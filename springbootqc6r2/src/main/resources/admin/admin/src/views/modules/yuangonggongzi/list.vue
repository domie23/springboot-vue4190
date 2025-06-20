<template>
  <div class="main-content">
    <!-- 列表页 -->
    <div v-if="showFlag">
      <el-form :inline="true" :model="searchForm" class="form-content">
        <el-row  :gutter="20" class="slt" :style="{justifyContent:contents.searchBoxPosition=='1'?'flex-start':contents.searchBoxPosition=='2'?'center':'flex-end'}">
		<el-form-item class="select" label="工资月份" prop="gongziyuefen">
		  <el-select  @change="gongziyuefenChange" clearable v-model="searchForm.gongziyuefen" placeholder="请选择工资月份">
		    <el-option
			v-for="(item,index) in gongziyuefenOptions"
			v-bind:key="index"
			:label="item"
			:value="item">
		    </el-option>
		  </el-select>
		</el-form-item>
		<el-form-item class="select" label="员工工号" prop="yuangonggonghao">
		  <el-select  @change="yuangonggonghaoChange" clearable v-model="searchForm.yuangonggonghao" placeholder="请选择员工工号">
		    <el-option
			v-for="(item,index) in yuangonggonghaoOptions"
			v-bind:key="index"
			:label="item"
			:value="item">
		    </el-option>
		  </el-select>
		</el-form-item>
          <el-form-item>
            <el-button v-if="contents.searchBtnIcon == 1 && contents.searchBtnIconPosition == 1" icon="el-icon-search" type="success" @click="search()">{{ contents.searchBtnFont == 1?'查询':'' }}</el-button>
            <el-button v-if="contents.searchBtnIcon == 1 && contents.searchBtnIconPosition == 2" type="success" @click="search()">{{ contents.searchBtnFont == 1?'查询':'' }}<i class="el-icon-search el-icon--right"/></el-button>
            <el-button v-if="contents.searchBtnIcon == 0" type="success" @click="search()">{{ contents.searchBtnFont == 1?'查询':'' }}</el-button>
          </el-form-item>
        </el-row>

        <el-row class="ad" :style="{justifyContent:contents.btnAdAllBoxPosition=='1'?'flex-start':contents.btnAdAllBoxPosition=='2'?'center':'flex-end'}">
          <el-form-item>
            <el-button
              v-if="isAuth('yuangonggongzi','新增') && contents.btnAdAllIcon == 1 && contents.btnAdAllIconPosition == 1"
              type="success"
              icon="el-icon-plus"
              @click="addOrUpdateHandler()"
            >{{ contents.btnAdAllFont == 1?'新增':'' }}</el-button>
            <el-button
              v-if="isAuth('yuangonggongzi','新增') && contents.btnAdAllIcon == 1 && contents.btnAdAllIconPosition == 2"
              type="success"
              @click="addOrUpdateHandler()"
            >{{ contents.btnAdAllFont == 1?'新增':'' }}<i class="el-icon-plus el-icon--right" /></el-button>
            <el-button
              v-if="isAuth('yuangonggongzi','新增') && contents.btnAdAllIcon == 0"
              type="success"
              @click="addOrUpdateHandler()"
            >{{ contents.btnAdAllFont == 1?'新增':'' }}</el-button>
            <el-button
              v-if="isAuth('yuangonggongzi','删除') && contents.btnAdAllIcon == 1 && contents.btnAdAllIconPosition == 1 && contents.tableSelection"
              :disabled="dataListSelections.length <= 0"
              type="danger"
              icon="el-icon-delete"
              @click="deleteHandler()"
            >{{ contents.btnAdAllFont == 1?'删除':'' }}</el-button>
            <el-button
              v-if="isAuth('yuangonggongzi','删除') && contents.btnAdAllIcon == 1 && contents.btnAdAllIconPosition == 2 && contents.tableSelection"
              :disabled="dataListSelections.length <= 0"
              type="danger"
              @click="deleteHandler()"
            >{{ contents.btnAdAllFont == 1?'删除':'' }}<i class="el-icon-delete el-icon--right" /></el-button>
            <el-button
              v-if="isAuth('yuangonggongzi','删除') && contents.btnAdAllIcon == 0 && contents.tableSelection"
              :disabled="dataListSelections.length <= 0"
              type="danger"
              @click="deleteHandler()"
            >{{ contents.btnAdAllFont == 1?'删除':'' }}</el-button>


	    <download-excel v-if="isAuth('yuangonggongzi','导出')" class = "export-excel-wrapper" :data = "dataList" :fields = "json_fields" name = "员工工资.xls">
		      <!-- 导出excel -->
            	<el-button
              	v-if="contents.btnAdAllIcon == 1 && contents.btnAdAllIconPosition == 1"
              	type="danger"
              	icon="el-icon-download"
            	>{{ contents.btnAdAllFont == 1?'导出':'' }}</el-button>
            	<el-button
              	v-if="contents.btnAdAllIcon == 1 && contents.btnAdAllIconPosition == 2"
              	type="danger"
            	>{{ contents.btnAdAllFont == 1?'导出':'' }}<i class="el-icon-download el-icon--right" /></el-button>
            	<el-button
              	v-if="contents.btnAdAllIcon == 0"
              	type="danger"
            	>{{ contents.btnAdAllFont == 1?'导出':'' }}</el-button>
       	    </download-excel>
            <el-button
              v-if="isAuth('yuangonggongzi','打印') && contents.btnAdAllIcon == 1 && contents.btnAdAllIconPosition == 1"
              type="success"
              icon="el-icon-printer"
              @click="printJson"
            >{{ contents.btnAdAllFont == 1?'打印':'' }}</el-button>
            <el-button
              v-if="isAuth('yuangonggongzi','打印') && contents.btnAdAllIcon == 1 && contents.btnAdAllIconPosition == 2"
              type="success"
              @click="printJson"
            >{{ contents.btnAdAllFont == 1?'打印':'' }}<i class="el-icon-printer el-icon--right" /></el-button>
            <el-button
              v-if="isAuth('yuangonggongzi','打印') && contents.btnAdAllIcon == 0"
              type="success"
              @click="printJson"
            >{{ contents.btnAdAllFont == 1?'打印':'' }}</el-button>


            <el-button
              v-if="isAuth('yuangonggongzi','报表') && contents.btnAdAllIcon == 1 && contents.btnAdAllIconPosition == 1"
              type="warning"
              icon="el-icon-s-data"
              @click="chartDialog()"
            >{{ contents.btnAdAllFont == 1?'统计报表':'' }}</el-button>
            <el-button
              v-if="isAuth('yuangonggongzi','报表') && contents.btnAdAllIcon == 1 && contents.btnAdAllIconPosition == 2"
              type="warning"
              @click="chartDialog()"
            >{{ contents.btnAdAllFont == 1?'统计报表':'' }}<i class="el-icon-s-data el-icon--right" /></el-button>
            <el-button
              v-if="isAuth('yuangonggongzi','报表') && contents.btnAdAllIcon == 0"
              type="warning"
              @click="chartDialog()"
            >{{ contents.btnAdAllFont == 1?'统计报表':'' }}</el-button>

          </el-form-item>
        </el-row>
      </el-form>
      <div class="table-content">
        <el-table class="tables" :size="contents.tableSize" :show-header="contents.tableShowHeader"
            :header-row-style="headerRowStyle" :header-cell-style="headerCellStyle"
            :border="contents.tableBorder"
            :fit="contents.tableFit"
            :stripe="contents.tableStripe"
            :style="{width: '100%',fontSize:contents.tableContentFontSize,color:contents.tableContentFontColor}"
            v-if="isAuth('yuangonggongzi','查看')"
            :data="dataList"
            v-loading="dataListLoading"
            @selection-change="selectionChangeHandler">
            <el-table-column  v-if="contents.tableSelection"
                type="selection"
                :header-align="contents.tableAlign"
                align="center"
                width="50">
            </el-table-column>
            <el-table-column label="索引" :align="contents.tableAlign"  v-if="contents.tableIndex" type="index" width="50" />
                <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign" 
                    prop="gongziyuefen"
                   :header-align="contents.tableAlign"
		    label="工资月份">
		     <template slot-scope="scope">
                       {{scope.row.gongziyuefen}}
                     </template>
                </el-table-column>
                <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign" 
                    prop="yuangonggonghao"
                   :header-align="contents.tableAlign"
		    label="员工工号">
		     <template slot-scope="scope">
                       {{scope.row.yuangonggonghao}}
                     </template>
                </el-table-column>
                <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign" 
                    prop="yuangongxingming"
                   :header-align="contents.tableAlign"
		    label="员工姓名">
		     <template slot-scope="scope">
                       {{scope.row.yuangongxingming}}
                     </template>
                </el-table-column>
                <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign" 
                    prop="bumen"
                   :header-align="contents.tableAlign"
		    label="部门">
		     <template slot-scope="scope">
                       {{scope.row.bumen}}
                     </template>
                </el-table-column>
                <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign" 
                    prop="jibengongzi"
                   :header-align="contents.tableAlign"
		    label="基本工资">
		     <template slot-scope="scope">
                       {{scope.row.jibengongzi}}
                     </template>
                </el-table-column>
                <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign" 
                    prop="gonglingbutie"
                   :header-align="contents.tableAlign"
		    label="工龄补贴">
		     <template slot-scope="scope">
                       {{scope.row.gonglingbutie}}
                     </template>
                </el-table-column>
                <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign" 
                    prop="jiabangongzi"
                   :header-align="contents.tableAlign"
		    label="加班工资">
		     <template slot-scope="scope">
                       {{scope.row.jiabangongzi}}
                     </template>
                </el-table-column>
                <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign" 
                    prop="jiangli"
                   :header-align="contents.tableAlign"
		    label="奖励">
		     <template slot-scope="scope">
                       {{scope.row.jiangli}}
                     </template>
                </el-table-column>
                <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign" 
                    prop="fakuan"
                   :header-align="contents.tableAlign"
		    label="罚款">
		     <template slot-scope="scope">
                       {{scope.row.fakuan}}
                     </template>
                </el-table-column>
                <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign" 
                    prop="geshui"
                   :header-align="contents.tableAlign"
		    label="个税">
		     <template slot-scope="scope">
                       {{scope.row.geshui}}
                     </template>
                </el-table-column>
                <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign" 
                    prop="shebaodaijiao"
                   :header-align="contents.tableAlign"
		    label="社保代缴">
		     <template slot-scope="scope">
                       {{scope.row.shebaodaijiao}}
                     </template>
                </el-table-column>
                <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign" 
                    prop="jiangchengshuoming"
                   :header-align="contents.tableAlign"
		    label="奖惩说明">
		     <template slot-scope="scope">
                       {{scope.row.jiangchengshuoming}}
                     </template>
                </el-table-column>
                <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign" 
                    prop="shifagongzi"
                   :header-align="contents.tableAlign"
		    label="实发工资">
		     <template slot-scope="scope">
                       {{scope.row.shifagongzi}}
                     </template>
                </el-table-column>
                <el-table-column  :sortable="contents.tableSortable" :align="contents.tableAlign" 
                    prop="dengjishijian"
                   :header-align="contents.tableAlign"
		    label="登记时间">
		     <template slot-scope="scope">
                       {{scope.row.dengjishijian}}
                     </template>
                </el-table-column>
            <el-table-column width="300" :align="contents.tableAlign" 
               :header-align="contents.tableAlign"
                label="操作">
                <template slot-scope="scope">
                <el-button v-if="isAuth('yuangonggongzi','查看') && contents.tableBtnIcon == 1 && contents.tableBtnIconPosition == 1" type="success" icon="el-icon-tickets" size="mini" @click="addOrUpdateHandler(scope.row.id,'info')">{{ contents.tableBtnFont == 1?'详情':'' }}</el-button>
                <el-button v-if="isAuth('yuangonggongzi','查看') && contents.tableBtnIcon == 1 && contents.tableBtnIconPosition == 2" type="success" size="mini" @click="addOrUpdateHandler(scope.row.id,'info')">{{ contents.tableBtnFont == 1?'详情':'' }}<i class="el-icon-tickets el-icon--right" /></el-button>
                <el-button v-if="isAuth('yuangonggongzi','查看') && contents.tableBtnIcon == 0" type="success" size="mini" @click="addOrUpdateHandler(scope.row.id,'info')">{{ contents.tableBtnFont == 1?'详情':'' }}</el-button>
                <el-button v-if=" isAuth('yuangonggongzi','修改') && contents.tableBtnIcon == 1 && contents.tableBtnIconPosition == 1" type="primary" icon="el-icon-edit" size="mini" @click="addOrUpdateHandler(scope.row.id)">{{ contents.tableBtnFont == 1?'修改':'' }}</el-button>
                <el-button v-if=" isAuth('yuangonggongzi','修改') && contents.tableBtnIcon == 1 && contents.tableBtnIconPosition == 2" type="primary" size="mini" @click="addOrUpdateHandler(scope.row.id)">{{ contents.tableBtnFont == 1?'修改':'' }}<i class="el-icon-edit el-icon--right" /></el-button>
                <el-button v-if=" isAuth('yuangonggongzi','修改') && contents.tableBtnIcon == 0" type="primary" size="mini" @click="addOrUpdateHandler(scope.row.id)">{{ contents.tableBtnFont == 1?'修改':'' }}</el-button>




                <el-button v-if="isAuth('yuangonggongzi','删除') && contents.tableBtnIcon == 1 && contents.tableBtnIconPosition == 1" type="danger" icon="el-icon-delete" size="mini" @click="deleteHandler(scope.row.id)">{{ contents.tableBtnFont == 1?'删除':'' }}</el-button>
                <el-button v-if="isAuth('yuangonggongzi','删除') && contents.tableBtnIcon == 1 && contents.tableBtnIconPosition == 2" type="danger" size="mini" @click="deleteHandler(scope.row.id)">{{ contents.tableBtnFont == 1?'删除':'' }}<i class="el-icon-delete el-icon--right" /></el-button>
                <el-button v-if="isAuth('yuangonggongzi','删除') && contents.tableBtnIcon == 0" type="danger" size="mini" @click="deleteHandler(scope.row.id)">{{ contents.tableBtnFont == 1?'删除':'' }}</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
          clsss="pages"
          :layout="layouts"
          @size-change="sizeChangeHandle"
          @current-change="currentChangeHandle"
          :current-page="pageIndex"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="Number(contents.pageEachNum)"
          :total="totalPage"
          :small="contents.pageStyle"
          class="pagination-content"
          :background="contents.pageBtnBG"
          :style="{textAlign:contents.pagePosition==1?'left':contents.pagePosition==2?'center':'right'}"
        ></el-pagination>
      </div>
    </div>
    <!-- 添加/修改页面  将父组件的search方法传递给子组件-->
    <add-or-update v-if="addOrUpdateFlag" :parent="this" ref="addOrUpdate"></add-or-update>





    <el-dialog
      title="统计报表"
      :visible.sync="chartVisiable"
      width="800">
        <div id="shifagongziChart" style="width:100%;height:600px;"></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="chartDialog">返回</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import axios from 'axios'
import AddOrUpdate from "./add-or-update";
export default {
  data() {
    return {
      yuangonggonghaoOptions: [],
      searchForm: {
        key: ""
      },
      form:{},
      dataList: [],
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataListLoading: false,
      dataListSelections: [],
      showFlag: true,
      sfshVisiable: false,
      shForm: {},
      chartVisiable: false,
      addOrUpdateFlag:false,
      contents:{"searchBtnFontColor":"rgba(0, 0, 0, 1)","pagePosition":"2","inputFontSize":"14px","inputBorderRadius":"20px","tableBtnDelFontColor":"rgba(0, 0, 0, 1)","tableBtnIconPosition":"1","searchBtnHeight":"42px","tableBgColor":"rgba(255, 255, 255, 1)","inputIconColor":"rgba(0, 0, 0, 1)","searchBtnBorderRadius":"20px","tableStripe":false,"btnAdAllWarnFontColor":"rgba(0, 0, 0, 1)","tableBtnDelBgColor":"rgba(56, 182, 230, 1)","searchBtnIcon":"1","tableSize":"medium","searchBtnBorderStyle":"double","text":{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.1)","margin":"0 auto","borderColor":"rgba(0,0,0,.3)","backgroundColor":"rgba(247, 247, 247, 0)","color":"rgba(0, 0, 0, 1)","borderRadius":"0","borderWidth":"0","width":"650px","lineHeight":"50px","fontSize":"26px","borderStyle":"solid"},"tableSelection":true,"searchBtnBorderWidth":"5px 000","tableContentFontSize":"14px","searchBtnBgColor":"#fff","inputTitleSize":"15px","btnAdAllBorderColor":"rgba(56, 182, 230, 1)","pageJumper":true,"btnAdAllIconPosition":"1","searchBoxPosition":"2","tableBtnDetailFontColor":"rgba(0, 0, 0, 1)","tableBtnHeight":"40px","pagePager":true,"searchBtnBorderColor":"rgba(56, 182, 230, 1)","tableHeaderFontColor":"rgba(0, 1, 4, 1)","inputTitle":"1","tableBtnBorderRadius":"5px","btnAdAllFont":"1","btnAdAllDelFontColor":"rgba(0, 0, 0, 1)","tableBtnIcon":"1","btnAdAllHeight":"46px","btnAdAllWarnBgColor":"rgba(255, 255, 255, 1)","btnAdAllBorderWidth":"5px 000","tableStripeFontColor":"rgba(0, 0, 0, 1)","tableBtnBorderStyle":"double","inputHeight":"42px","btnAdAllBorderRadius":"20px","btnAdAllDelBgColor":"rgba(255, 255, 255, 1)","pagePrevNext":true,"btnAdAllAddBgColor":"rgba(255, 255, 255, 1)","searchBtnFont":"1","tableIndex":true,"btnAdAllIcon":"0","tableSortable":false,"pageSizes":true,"tableFit":true,"pageBtnBG":true,"searchBtnFontSize":"15px","tableBtnEditBgColor":"rgba(56, 182, 230, 1)","box":{"padding":"10px 20px","boxShadow":"0 0 6px rgba(0,0,0,0)","flag":1,"backgroundImage":"http://codegen.caihongy.cn/20211124/229bbb98f09a41bc83995f14c422a0a1.jpg","background":"#fff"},"inputBorderWidth":"5px 000","inputFontPosition":"1","inputFontColor":"rgba(0, 0, 0, 1)","pageEachNum":10,"tableHeaderBgColor":"rgba(119, 197, 227, 1)","inputTitleColor":"rgba(0, 0, 0, 1)","btnAdAllBoxPosition":"1","tableBtnDetailBgColor":"rgba(56, 182, 230, 1)","inputIcon":"1","searchBtnIconPosition":"2","btnAdAllFontSize":"14px","inputBorderStyle":"double","tableHoverFontColor":"#333","inputBgColor":"rgba(255, 255, 255, 1)","pageStyle":false,"pageTotal":true,"btnAdAllAddFontColor":"rgba(0, 0, 0, 1)","tableBtnFont":"1","tableContentFontColor":"rgba(0, 0, 0, 1)","inputBorderColor":"rgba(56, 182, 230, 1)","tableShowHeader":true,"tableHoverBgColor":"rgba(119, 197, 227, 0.8)","tableBtnFontSize":"14px","tableBtnBorderColor":"rgba(255, 255, 255, 1)","inputIconPosition":"2","tableBorder":true,"btnAdAllBorderStyle":"double","tableBtnBorderWidth":"5px","tableStripeBgColor":"rgba(119, 197, 227, 0.8)","tableBtnEditFontColor":"rgba(0, 0, 0, 1)","tableAlign":"center"},
      layouts: '',

//导出excel
      json_fields: {
      "工资月份": "gongziyuefen",    //常规字段
      "员工工号": "yuangonggonghao",    //常规字段
      "员工姓名": "yuangongxingming",    //常规字段
      "部门": "bumen",    //常规字段
      "基本工资": "jibengongzi",    //常规字段
      "工龄补贴": "gonglingbutie",    //常规字段
      "加班工资": "jiabangongzi",    //常规字段
      "奖励": "jiangli",    //常规字段
      "罚款": "fakuan",    //常规字段
      "个税": "geshui",    //常规字段
      "社保代缴": "shebaodaijiao",    //常规字段
      "奖惩说明": "jiangchengshuoming",    //常规字段
      "实发工资": "shifagongzi",    //常规字段
      "登记时间": "dengjishijian",    //常规字段
      },
      json_meta: [
        [
          {
            " key ": " charset ",
            " value ": " utf- 8 "
          }
        ]
      ]

    };
  },
  created() {
    this.init();
    this.getDataList();
    this.contentStyleChange()
  },
  mounted() {

  },
  filters: {
    htmlfilter: function (val) {
      return val.replace(/<[^>]*>/g).replace(/undefined/g,'');
    }
  },
  components: {
    AddOrUpdate,
  },
  methods: {

    contentStyleChange() {
      this.contentSearchStyleChange()
      this.contentBtnAdAllStyleChange()
      this.contentSearchBtnStyleChange()
      this.contentTableBtnStyleChange()
      this.contentPageStyleChange()
    },
    contentSearchStyleChange() {
      this.$nextTick(()=>{
        document.querySelectorAll('.form-content .slt .el-input__inner').forEach(el=>{
          let textAlign = 'left'
          if(this.contents.inputFontPosition == 2) textAlign = 'center'
          if(this.contents.inputFontPosition == 3) textAlign = 'right'
          el.style.textAlign = textAlign
          el.style.height = this.contents.inputHeight
          el.style.lineHeight = this.contents.inputHeight
          el.style.color = this.contents.inputFontColor
          el.style.fontSize = this.contents.inputFontSize
          el.style.borderWidth = this.contents.inputBorderWidth
          el.style.borderStyle = this.contents.inputBorderStyle
          el.style.borderColor = this.contents.inputBorderColor
          el.style.borderRadius = this.contents.inputBorderRadius
          el.style.backgroundColor = this.contents.inputBgColor
        })
        if(this.contents.inputTitle) {
          document.querySelectorAll('.form-content .slt .el-form-item__label').forEach(el=>{
            el.style.color = this.contents.inputTitleColor
            el.style.fontSize = this.contents.inputTitleSize
            el.style.lineHeight = this.contents.inputHeight
          })
        }
        setTimeout(()=>{
          document.querySelectorAll('.form-content .slt .el-input__prefix').forEach(el=>{
            el.style.color = this.contents.inputIconColor
            el.style.lineHeight = this.contents.inputHeight
          })
          document.querySelectorAll('.form-content .slt .el-input__suffix').forEach(el=>{
            el.style.color = this.contents.inputIconColor
            el.style.lineHeight = this.contents.inputHeight
          })
          document.querySelectorAll('.form-content .slt .el-input__icon').forEach(el=>{
            el.style.lineHeight = this.contents.inputHeight
          })
        },10)

      })
    },
    // 搜索按钮
    contentSearchBtnStyleChange() {
      this.$nextTick(()=>{
        document.querySelectorAll('.form-content .slt .el-button--success').forEach(el=>{
          el.style.height = this.contents.searchBtnHeight
          el.style.color = this.contents.searchBtnFontColor
          el.style.fontSize = this.contents.searchBtnFontSize
          el.style.borderWidth = this.contents.searchBtnBorderWidth
          el.style.borderStyle = this.contents.searchBtnBorderStyle
          el.style.borderColor = this.contents.searchBtnBorderColor
          el.style.borderRadius = this.contents.searchBtnBorderRadius
          el.style.backgroundColor = this.contents.searchBtnBgColor
        })
      })
    },
    // 新增、批量删除
    contentBtnAdAllStyleChange() {
      this.$nextTick(()=>{
        document.querySelectorAll('.form-content .ad .el-button--success').forEach(el=>{
          el.style.height = this.contents.btnAdAllHeight
          el.style.color = this.contents.btnAdAllAddFontColor
          el.style.fontSize = this.contents.btnAdAllFontSize
          el.style.borderWidth = this.contents.btnAdAllBorderWidth
          el.style.borderStyle = this.contents.btnAdAllBorderStyle
          el.style.borderColor = this.contents.btnAdAllBorderColor
          el.style.borderRadius = this.contents.btnAdAllBorderRadius
          el.style.backgroundColor = this.contents.btnAdAllAddBgColor
        })
        document.querySelectorAll('.form-content .ad .el-button--danger').forEach(el=>{
          el.style.height = this.contents.btnAdAllHeight
          el.style.color = this.contents.btnAdAllDelFontColor
          el.style.fontSize = this.contents.btnAdAllFontSize
          el.style.borderWidth = this.contents.btnAdAllBorderWidth
          el.style.borderStyle = this.contents.btnAdAllBorderStyle
          el.style.borderColor = this.contents.btnAdAllBorderColor
          el.style.borderRadius = this.contents.btnAdAllBorderRadius
          el.style.backgroundColor = this.contents.btnAdAllDelBgColor
        })
        document.querySelectorAll('.form-content .ad .el-button--warning').forEach(el=>{
          el.style.height = this.contents.btnAdAllHeight
          el.style.color = this.contents.btnAdAllWarnFontColor
          el.style.fontSize = this.contents.btnAdAllFontSize
          el.style.borderWidth = this.contents.btnAdAllBorderWidth
          el.style.borderStyle = this.contents.btnAdAllBorderStyle
          el.style.borderColor = this.contents.btnAdAllBorderColor
          el.style.borderRadius = this.contents.btnAdAllBorderRadius
          el.style.backgroundColor = this.contents.btnAdAllWarnBgColor
        })
      })
    },
    // 表格
    // rowStyle({ row, rowIndex}) {
    //   if (rowIndex % 2 == 1) {
    //     if(this.contents.tableStripe) {
    //       return {color:this.contents.tableStripeFontColor}
    //     }
    //   } else {
    //     return ''
    //   }
    // },
    // cellStyle({ row, rowIndex}){
    //   if (rowIndex % 2 == 1) {
    //     if(this.contents.tableStripe) {
    //       return {backgroundColor:this.contents.tableStripeBgColor}
    //     }
    //   } else {
    //     return ''
    //   }
    // },
    headerRowStyle({ row, rowIndex}){
      return {color: this.contents.tableHeaderFontColor}
    },
    headerCellStyle({ row, rowIndex}){
      return {backgroundColor: this.contents.tableHeaderBgColor}
    },
    // 表格按钮
    contentTableBtnStyleChange(){
      // this.$nextTick(()=>{
      //   setTimeout(()=>{
      //     document.querySelectorAll('.table-content .tables .el-table__body .el-button--success').forEach(el=>{
      //       el.style.height = this.contents.tableBtnHeight
      //       el.style.color = this.contents.tableBtnDetailFontColor
      //       el.style.fontSize = this.contents.tableBtnFontSize
      //       el.style.borderWidth = this.contents.tableBtnBorderWidth
      //       el.style.borderStyle = this.contents.tableBtnBorderStyle
      //       el.style.borderColor = this.contents.tableBtnBorderColor
      //       el.style.borderRadius = this.contents.tableBtnBorderRadius
      //       el.style.backgroundColor = this.contents.tableBtnDetailBgColor
      //     })
      //     document.querySelectorAll('.table-content .tables .el-table__body .el-button--primary').forEach(el=>{
      //       el.style.height = this.contents.tableBtnHeight
      //       el.style.color = this.contents.tableBtnEditFontColor
      //       el.style.fontSize = this.contents.tableBtnFontSize
      //       el.style.borderWidth = this.contents.tableBtnBorderWidth
      //       el.style.borderStyle = this.contents.tableBtnBorderStyle
      //       el.style.borderColor = this.contents.tableBtnBorderColor
      //       el.style.borderRadius = this.contents.tableBtnBorderRadius
      //       el.style.backgroundColor = this.contents.tableBtnEditBgColor
      //     })
      //     document.querySelectorAll('.table-content .tables .el-table__body .el-button--danger').forEach(el=>{
      //       el.style.height = this.contents.tableBtnHeight
      //       el.style.color = this.contents.tableBtnDelFontColor
      //       el.style.fontSize = this.contents.tableBtnFontSize
      //       el.style.borderWidth = this.contents.tableBtnBorderWidth
      //       el.style.borderStyle = this.contents.tableBtnBorderStyle
      //       el.style.borderColor = this.contents.tableBtnBorderColor
      //       el.style.borderRadius = this.contents.tableBtnBorderRadius
      //       el.style.backgroundColor = this.contents.tableBtnDelBgColor
      //     })

      //   }, 50)
      // })
    },
    // 分页
    contentPageStyleChange(){
      let arr = []

      if(this.contents.pageTotal) arr.push('total')
      if(this.contents.pageSizes) arr.push('sizes')
      if(this.contents.pagePrevNext){
        arr.push('prev')
        if(this.contents.pagePager) arr.push('pager')
        arr.push('next')
      }
      if(this.contents.pageJumper) arr.push('jumper')
      this.layouts = arr.join()
      this.contents.pageEachNum = 10
    },

    chartDialog() {
      this.chartVisiable = !this.chartVisiable;
      this.$nextTick(()=>{
        // gongziyuefen gongziyuefen
        //  shifagongzi
        // xcolumn ycolumn gongziyuefen shifagongzi
        var shifagongziChart = this.$echarts.init(document.getElementById("shifagongziChart"),'macarons');
        this.$http({
            url: `yuangonggongzi/value/gongziyuefen/shifagongzi`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].gongziyuefen);
                    yAxis.push(parseFloat((res[i].total)).toFixed(2));
                    pArray.push({
                    value: parseFloat((res[i].total)),
                    name: res[i].gongziyuefen
                    })
                    var option = {};
                    option = {
                        tooltip: {
                          trigger: 'item',
                          formatter: '{b} : {c}'
                        },
                        title: {
                            text: '员工工资',
                            left: 'center'
                        },
                        xAxis: {
                            type: 'category',
                            data: xAxis
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: yAxis,
                            type: 'bar'
                        }]
                    };
                    // 使用刚指定的配置项和数据显示图表。
                    shifagongziChart.setOption(option);
                    //根据窗口的大小变动图表
                    window.onresize = function() {
                        shifagongziChart.resize();
                    };
                }
            }
        });
      })
    },
    init () {
          this.gongziyuefenOptions = "1月份,2月份,3月份,4月份,5月份,6月份,7月份,8月份,9月份,10月份,11月份,12月份".split(',')
          this.$http({
            url: `option/yuangong/yuangonggonghao`,
            method: "get"
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.yuangonggonghaoOptions = data.data;
            } else {
              this.$message.error(data.msg);
            }
          });
    },
    search() {
      this.pageIndex = 1;
      this.getDataList();
    },

    // 获取数据列表
    getDataList() {
      this.dataListLoading = true;
      let params = {
        page: this.pageIndex,
        limit: this.pageSize,
        sort: 'id',
      }
          if(this.searchForm.gongziyuefen!='' && this.searchForm.gongziyuefen!=undefined){
            params['gongziyuefen'] = this.searchForm.gongziyuefen
          }
          if(this.searchForm.yuangonggonghao!='' && this.searchForm.yuangonggonghao!=undefined){
            params['yuangonggonghao'] = this.searchForm.yuangonggonghao
          }
      this.$http({
        url: "yuangonggongzi/page",
        method: "get",
        params: params
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.dataList = data.data.list;
          this.totalPage = data.data.total;
        } else {
          this.dataList = [];
          this.totalPage = 0;
        }
        this.dataListLoading = false;
      });
    },
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },
    // 多选
    selectionChangeHandler(val) {
      this.dataListSelections = val;
    },
    // 添加/修改
    addOrUpdateHandler(id,type) {
      this.showFlag = false;
      this.addOrUpdateFlag = true;
      this.crossAddOrUpdateFlag = false;
      if(type!='info'){
        type = 'else';
      }
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id,type);
      });
    },
    // 查看评论
    // 下载
    download(file){
      window.open(`${file}`)
    },
    // 删除
    deleteHandler(id) {
      var ids = id
        ? [Number(id)]
        : this.dataListSelections.map(item => {
            return Number(item.id);
          });
      this.$confirm(`确定进行[${id ? "删除" : "批量删除"}]操作?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$http({
          url: "yuangonggongzi/delete",
          method: "post",
          data: ids
        }).then(({ data }) => {
          if (data && data.code === 0) {
            this.$message({
              message: "操作成功",
              type: "success",
              duration: 1500,
              onClose: () => {
                this.search();
              }
            });
          } else {
            this.$message.error(data.msg);
          }
        });
      });
    },


    async printJson() {
      //通过getdata调用后台接口获取数据封装到res
      this.list = this.dataList;
      let data = []
      for (let i=0; i < this.list.length; i++) {
          data.push({
          gongziyuefen: this.list[i].gongziyuefen,
          yuangonggonghao: this.list[i].yuangonggonghao,
          yuangongxingming: this.list[i].yuangongxingming,
          bumen: this.list[i].bumen,
          jibengongzi: this.list[i].jibengongzi,
          gonglingbutie: this.list[i].gonglingbutie,
          jiabangongzi: this.list[i].jiabangongzi,
          jiangli: this.list[i].jiangli,
          fakuan: this.list[i].fakuan,
          geshui: this.list[i].geshui,
          shebaodaijiao: this.list[i].shebaodaijiao,
          jiangchengshuoming: this.list[i].jiangchengshuoming,
          shifagongzi: this.list[i].shifagongzi,
          dengjishijian: this.list[i].dengjishijian,
        })
      }
      printJS({
        printable: data,
        properties: [
	  {
		field: 'gongziyuefen',
		displayName: '工资月份',
		columnSize: 1
	  },
	  {
		field: 'yuangonggonghao',
		displayName: '员工工号',
		columnSize: 1
	  },
	  {
		field: 'yuangongxingming',
		displayName: '员工姓名',
		columnSize: 1
	  },
	  {
		field: 'bumen',
		displayName: '部门',
		columnSize: 1
	  },
	  {
		field: 'jibengongzi',
		displayName: '基本工资',
		columnSize: 1
	  },
	  {
		field: 'gonglingbutie',
		displayName: '工龄补贴',
		columnSize: 1
	  },
	  {
		field: 'jiabangongzi',
		displayName: '加班工资',
		columnSize: 1
	  },
	  {
		field: 'jiangli',
		displayName: '奖励',
		columnSize: 1
	  },
	  {
		field: 'fakuan',
		displayName: '罚款',
		columnSize: 1
	  },
	  {
		field: 'geshui',
		displayName: '个税',
		columnSize: 1
	  },
	  {
		field: 'shebaodaijiao',
		displayName: '社保代缴',
		columnSize: 1
	  },
	  {
		field: 'jiangchengshuoming',
		displayName: '奖惩说明',
		columnSize: 1
	  },
	  {
		field: 'shifagongzi',
		displayName: '实发工资',
		columnSize: 1
	  },
	  {
		field: 'dengjishijian',
		displayName: '登记时间',
		columnSize: 1
	  },
        ],
        type: 'json',
        header: '员工工资',
        // 样式设置
        gridStyle: 'border: 2px solid #3971A5;',
        gridHeaderStyle: 'color: red;  border: 2px solid #3971A5;'
      })
    },
  }

};
</script>
<style lang="scss" scoped>
//导出excel
  .export-excel-wrapper{
    display: inline-block;
  }
  .slt {
    margin: 0 !important;
    display: flex;
  }

  .ad {
    margin: 0 !important;
    display: flex;
  }

  .pages {
    & /deep/ el-pagination__sizes{
      & /deep/ el-input__inner {
        height: 22px;
        line-height: 22px;
      }
    }
  }
  

  .el-button+.el-button {
    margin:0;
  } 

  .tables {
	& /deep/ .el-button--success {
		height: 40px;
		color: rgba(0, 0, 0, 1);
		font-size: 14px;
		border-width: 5px;
		border-style: double;
		border-color: rgba(255, 255, 255, 1);
		border-radius: 5px;
		background-color: rgba(56, 182, 230, 1);
	}
	
	& /deep/ .el-button--primary {
		height: 40px;
		color: rgba(0, 0, 0, 1);
		font-size: 14px;
		border-width: 5px;
		border-style: double;
		border-color: rgba(255, 255, 255, 1);
		border-radius: 5px;
		background-color: rgba(56, 182, 230, 1);
	}
	
	& /deep/ .el-button--danger {
		height: 40px;
		color: rgba(0, 0, 0, 1);
		font-size: 14px;
		border-width: 5px;
		border-style: double;
		border-color: rgba(255, 255, 255, 1);
		border-radius: 5px;
		background-color: rgba(56, 182, 230, 1);
	}

    & /deep/ .el-button {
      margin: 4px;
    }
  }
	.form-content {
		background: transparent;
	}
	.table-content {
		background: transparent;
	}
	
	.tables /deep/ .el-table__body tr {
				background-color: rgba(255, 255, 255, 1) !important;
				color: rgba(0, 0, 0, 1) !important;
	 }
	.tables /deep/ .el-table__body tr.el-table__row--striped td {
	    background: transparent;
	}
	.tables /deep/ .el-table__body tr.el-table__row--striped {
		background-color: rgba(119, 197, 227, 0.8) !important;
		color: rgba(0, 0, 0, 1) !important;
	}
	
	 .tables /deep/ .el-table__body tr:hover>td {
	   	   background-color: rgba(119, 197, 227, 0.8) !important;
	   	   	   color: #333 !important;
	   	 }
	 
</style>
