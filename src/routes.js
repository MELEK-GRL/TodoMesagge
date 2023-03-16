import HomeLayout from './page/Home/index'
import Home from './page/Home/Home'
import Moms from './page/Moms'
import Experts from './page/Experts'
import Explore from './page/Explore'
import Forum from './page/Forum'
import MomTalk from './page/MomTalk'

const routes=[
    {
        path:'/',
        element:<HomeLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/moms',
                element:<Moms/>
            },
            {
                path:'/experts',
                element:<Experts/>
            },
            {
                path:'/explore',
                element:<Explore/>
            },
            {
                path:'/forum',
                element:<Forum/>
            },
            {
                path:'/momtalk',
                element:<MomTalk/>
            },

        ]


    }
]

export default routes