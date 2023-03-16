import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../page/Home/Home'
import Moms from '../page/Moms'
import Experts from '../page/Experts'
import Explore from '../page/Explore'
import Forum from '../page/Forum'
import MomTalk from '../page/MomTalk'


export default function Routers() {
  return (
  <Routes>
    <Route path='/' element={<Navigate to='/TodoMesagge'/>}/>
    <Route path='/TodoMesagge' element={<Home/>}/>
    <Route path='/moms' element={<Moms/>}/>
    <Route path='/experts' element={<Experts/>}/>
    <Route path='/explore' element={<Explore/>}/>
    <Route path='/forum' element={<Forum/>}/>
    <Route path='/momTalk' element={<MomTalk/>}/>
  </Routes>
  )
}
