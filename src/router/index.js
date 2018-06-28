import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BasicInfoElementTable from '@/components/BasicInfoElementTable'
import BasicInfo from '@/components/BasicInfo'
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
      path: '/basicinfoelementtable',
      name: 'BasicInfoElementTable',
      component: BasicInfoElementTable
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
