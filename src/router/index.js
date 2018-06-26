import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BasicInfo from '@/components/BasicInfo'
import BasicInfoTable from '@/components/BasicInfoTable'
import CompanyDetails from '@/components/CompanyDetails'
import ContactInfo from '@/components/ContactInfo'
import MeetingDetails from '@/components/MeetingDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    },
    {
      path: '/contactinfo',
      name: 'ContactInfo',
      component: ContactInfo
    },
    {
      path: '/meetingdetails',
      name: 'MeetingDetails',
      component: MeetingDetails
    }
  ]
})
