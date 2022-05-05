import Header from "./Header";
import List from "./List";

export default function GithubSearch() {
  return (
    <div style={{border: '1px solid red', borderRadius: '10px', textAlign: 'center',width: '600px', padding: '20px'}}>
      <Header/>
      <List/>
    </div>
  )
}