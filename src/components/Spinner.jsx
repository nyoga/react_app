import React from 'react'
import { ClipLoader } from 'react-spinners'


const Spinner = ({loading}) => {
const override ={
  display :'block',
  margin: '100px auto',
}

  return (
    <ClipLoader 
      color ='#4338ca'
      loading ={loading}
      cssOverride ={override}
      size = {150}
    />
  )
}

export default Spinner

/*2:02:10
there is something called react suspense

2:02:13
which is included with react and it

2:02:15
allows you to do a render while fetching

2:02:17
what we're doing here is uh fetch on

2:02:20
render because when it renders it has a

2:02:23
side effect of fetching the data but

2:02:26
suspense will allow you to render while

2:02:28
fetching and you basically provide a

2:02:30
fallback UI such as a spinner or a

2:02:33
loading text whatever you pass that in

2:02:35
as a prop or as an attribute  

there's also

2:02:51
something called react query which is a

2:02:54
third-party Library there's one called s

2:02:56
SWR as well and that those make data

2:02:59
fetching a little easier than this
*/
