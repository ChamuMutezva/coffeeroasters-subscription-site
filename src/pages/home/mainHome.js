import { Collections } from '../components/dataList';
const MainHome = () => {
    console.log(Collections)
    return (
        <main className="main">
            <div className="collection">
                <h2 className="main__title">Our collection</h2>
                <ul>
                    {Collections.map(item => {
                        return <li key={item.id}>
                                    <h3>{item.title}</h3>
                                    <p>{item.summary}</p>
                                    <img src={item.imgUrl} alt={`enjoy our ${item.title}`} />
                                </li>
                    })}
                </ul>
            </div>
        </main>
    )
}
export default MainHome