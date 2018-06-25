import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BasicInfo from '@/components/BasicInfo'
import BasicInfoTable from '@/components/BasicInfoTable'
import CompanyDetails from '@/components/CompanyDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/basicinfo',
      name: 'BasicInfo',
      component: BasicInfo
    },
    {
      path: '/basicinfotable',
      name: 'BasicInfoTable',
      component: BasicInfoTable
    },
    {
      path: '/companydetails',
      name: 'CompanyDetails',
      component: CompanyDetails
    }
  ]
})
