
import classes from './TrendingDes.module.css';
import Prphoto from '../../assets/e228bf3be784ffff7a338ec8d9167d30-pristina.jpg';
import Trphoto from '../../assets/26 Incredible Things to do in Tirana, Albania - Travelling Balkans.jpeg';
import ulphoto from '../../assets/ee07a2c3-city-49674-172bfd58a2c.jpg';
import isphoto from '../../assets/3bae040b-2afb-4b11-9542-859eeb8ebaf1.webp';
import egphoto from '../../assets/egypt-1.jpg';
import kspng from '../../assets/Flag_of_Kosovo.png'
import alpng from '../../assets/Flag_of_Albania.png';
import ulpng from '../../assets/Flag_of_Montenegro.svg.png';
import trpng from '../../assets/Flag_of_Turkey.svg.png';
import egpng from '../../assets/1200px-Flag_of_Egypt_(variant).png';
import { useTranslation } from 'react-i18next';

const TrendingDes = (props) =>{
    const { t } = useTranslation();
    return(
        <div className={classes.containerdiv}>
            <div  className={classes.textdiv}>
                <h2>{t('Trending')}</h2>
                <p>{t('Most')}</p>
            </div>
            <div className={classes.photodiv}>
                <div className={classes.prphoto}>
                    <div className={classes.ksspng}><h2>PRISHTINA </h2>
                    <img src={kspng}/>
                    </div>
                <img src={Prphoto}/>
                </div>
                <div>
                    <div className={classes.trphoto}>
                    <div className={classes.allpng}> <h2>TIRANA</h2>
                    <img src={alpng}/>
                    </div>
                <img src={Trphoto}/>
                </div>
                </div>

            </div>
            <div className={classes.secondphotos}>
                <div>
                    <div className={classes.ullpng}>
                    <h2>ULCINJ</h2>
                        <img src={ulpng}/>
                    </div>
                <img src={ulphoto}/>
                </div>
                <div>
                    <div className={classes.trrpng}>
                    <h2>TURKEY</h2>
                    <img src={trpng} />
                    </div>
                <img src={isphoto}/>
                <div/>
                </div>
                <div>
                    <div className={classes.eggpng}>
                    <h2>EGYPT</h2>
                    <img src={egpng}/>
                    </div>
                <img src={egphoto}/>
                </div>
            </div>


            
        </div>
    );
};

export default TrendingDes;