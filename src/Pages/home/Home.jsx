import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widgets from '../../components/widgets/Widgets'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Table from "../../components/table/Table"

function Home() {
  return (
    <div className='home'>
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widgets type="user"/>
            <Widgets type="order"/>
            <Widgets type="earnings"/>
            <Widgets type="balance"/>
          </div>
          <div className="charts">
            <Featured />
            <Chart  title="Last 6 Month (Revenue)" aspect={2/1}/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transaction</div>
            <Table />
          </div>
        </div>
    </div>
  )
}

export default Home
