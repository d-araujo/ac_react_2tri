import Image from 'react-bootstrap/Image';
import img1 from './assets/1.jpg';

function Imgs(){
return(
        <div className='row'>
                <div className="gallery_product  ">
                        <Image src={img1}  fluid />
                        <h4 className="title">Produtos</h4>
                </div>
        </div>
);
}
export default Imgs;