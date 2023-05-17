import { Child, ChildRFC } from './Child';

function Parent() {
  return (
    <div>
        <Child color='red' onClick={() => console.log('Clicked')}/>
        <ChildRFC color='green' onClick={() => console.log('Clicked')}/>
    </div>
  )
}

export default Parent