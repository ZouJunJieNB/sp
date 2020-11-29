<template>
  <div class="body">
    <div class="body-head flex-cen">
      <div>
        按执行/历史排序
        <el-select
          v-model="deviceSNMP"
          class="select-style"
          clearable
          size="large"
          autocomplete="off"
        >
          <el-option
            v-for="item in deviceSNMPList"
            :key="item.key"
            :label="item.label"
            :value="item.key"
          ></el-option>
        </el-select>
      </div>
      <div>
        供应商排序
        <el-select
          v-model="deviceSNMP"
          class="select-style"
          clearable
          size="large"
          autocomplete="off"
        >
          <el-option
            v-for="item in deviceSNMPList"
            :key="item.key"
            :label="item.label"
            :value="item.key"
          ></el-option>
        </el-select>
      </div>
      <div>
        按商品类型排序
        <el-select
          v-model="deviceSNMP"
          class="select-style"
          clearable
          size="large"
          autocomplete="off"
        >
          <el-option
            v-for="item in deviceSNMPList"
            :key="item.key"
            :label="item.label"
            :value="item.key"
          ></el-option>
        </el-select>
      </div>
    </div>
    <div class="body-body">
      <el-table
        :data="tableData"
        height="550"
        style="width: 100%;margin-bottom: 20px;"
        row-key="id"
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column
          prop="sort"
          label="序号"
          sortable
          align="center"
          header-align="center"
        >
        </el-table-column>
        <el-table-column prop="orderNumber" label="订单编号" sortable>
        </el-table-column>
        <el-table-column prop="commodityName" label="商品名称" sortable>
        </el-table-column>
        <el-table-column prop="supplier" label="供应商"> </el-table-column>
        <el-table-column prop="count" label="数量"> </el-table-column>
        <el-table-column prop="amount" label="单价"> </el-table-column>
        <el-table-column prop="date" label="日期"> </el-table-column>

        <el-table-column align="center">
          <template slot="header">
            详情/关闭
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleDetails(scope.$index, scope.row)"
              >details</el-button
            >
            <el-button size="mini" type="danger">close</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="body-footer flex-cen">
      <div style="margin:auto">
        <Pagination :total="100" />
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/pagination";
export default {
  components: {
    Pagination,
  },
  data() {
    return {
      deviceSNMP: "0",
      deviceSNMPList: [
        {
          key: "0",
          label: "混料",
          icon: "",
        },
        {
          key: "1",
          label: "大混料",
          icon: "",
        },
        {
          key: "3",
          label: "小混料",
          icon: "",
        },
      ],
      tableData: [
        {
          id: 1,
          sort: 1,
          date: "2016-05-02",
          orderNumber: "ZNS0139580983501085",
          commodityName: "润滑油",
          supplier: "上星",
          count: 5,
          amount: "288.99",
        },
        {
          id: 2,
          sort: 2,
          date: "2016-05-02",
          orderNumber: "ZNS0139580983501085",
          commodityName: "润滑油",
          supplier: "上星",
          count: 5,
          amount: "288.99",
        },
        {
          id: 3,
          sort: 3,
          date: "2016-05-02",
          orderNumber: "ZNS0139580983501085",
          commodityName: "润滑油",
          supplier: "上星",
          count: 5,
          amount: "288.99",
          children: [
            {
              id: "3-1",
              date: "2016-05-02",
              commodityName: "润滑油",
              supplier: "上星",
              count: 5,
              amount: "288.99",
              img:
                "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3918045283,989435347&fm=26&gp=0.jpg",
            },
            {
              id: "3-2",
              date: "2016-05-02",
              commodityName: "润滑油",
              supplier: "上星",
              count: 5,
              amount: "288.99",
              img:
                "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3918045283,989435347&fm=26&gp=0.jpg",
            },
          ],
        },
        {
          id: 4,
          sort: 4,
          date: "2016-05-02",
          orderNumber: "ZNS0139580983501085",
          commodityName: "润滑油",
          supplier: "上星",
          count: 5,
          amount: "288.99",
        },
      ],
    };
  },
  methods: {
    handleDetails(index, row) {
      console.log(row);
      this.$router.push({
        path: "/orderDetails",
        query: { orderId: row.id },
      });
    },
  },
};
</script>
<style>
.cell {
  position: relative !important;
}
.el-table__expand-icon,
.el-table__expand-icon--expanded {
  position: absolute !important;
  left: 10px !important;
}
</style>
<style lang="less" scoped>
.body {
  width: 97%;
  height: 98%;
  margin: auto;
  background: #fff;
  border-radius: 25px;
  .body-head {
    width: 95%;
    height:80px;
    margin-left: 5%;
    div {
      margin-right: 30px;
      letter-spacing: 1px; //间距
    }
    .el-select {
      width: 100px;
    }
  }
  .body-body {
    width: 100%;
    border-top: 1px solid #a9a9a9;
    // .el-table [class*=el-table__row--level] .el-table__expand-icon{
    //   // text-align: left;
    //   margin-right: 30px !important;
    // }
  }
  .body-footer {
    width: 100%;
  }
}
</style>
