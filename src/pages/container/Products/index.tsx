import Image from 'next/image'

import { FiArrowRight } from 'react-icons/fi'
import styles from './styles.module.scss'
import { useState } from 'react'

export default function Products() {
  const [imageSelected, setImageSelected] = useState('https://instagram.fplu4-1.fna.fbcdn.net/v/t51.2885-15/199281809_220635003232361_6004356092325267126_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fplu4-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=o4Q4o7YWbhQAX88qTTE&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjU5Mzc2OTcxMDg0MzkwNDg5MQ%3D%3D.2-ccb7-5&oh=00_AT955Gung5k0FdQQAPaA_lkW57bETEdupD5WXt8W5fQzsw&oe=62EB93C0&_nc_sid=30a2ef')

  async function handleImageUrl(id) {
    switch (id) {
      case 'tables':
        await setImageSelected('https://instagram.fplu4-1.fna.fbcdn.net/v/t51.2885-15/199281809_220635003232361_6004356092325267126_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fplu4-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=o4Q4o7YWbhQAX88qTTE&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjU5Mzc2OTcxMDg0MzkwNDg5MQ%3D%3D.2-ccb7-5&oh=00_AT955Gung5k0FdQQAPaA_lkW57bETEdupD5WXt8W5fQzsw&oe=62EB93C0&_nc_sid=30a2ef')
        break;
      case 'case':
        await setImageSelected('https://instagram.fplu4-1.fna.fbcdn.net/v/t51.2885-15/172599913_1214603832287230_3839901167696416465_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fplu4-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=jH_0qPDY3nwAX_nnqJK&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjU1MTc5MzA0MzM4OTEyMTc2Mw%3D%3D.2-ccb7-5&oh=00_AT_JmDNSeHEByjIVSRkiZRG9BfWVdIlJa5OayjGx8v-X4Q&oe=62EC85EE&_nc_sid=30a2ef')
        break;
      case 'buffet':
        await setImageSelected('https://instagram.fplu4-1.fna.fbcdn.net/v/t51.2885-15/233199446_554999085627610_8887587165834968305_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fplu4-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=QnE8ISr0hLYAX_Wjm1N&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjYzNDQ3MjEzNzU5NzcxNzI0MQ%3D%3D.2-ccb7-5&oh=00_AT8-GRpO73Wh-gBybne3BmodXT5qeOQep8BfI27tFDSqAA&oe=62EBCF4C&_nc_sid=30a2ef')
        break;
      case 'shelf':
        await setImageSelected('https://instagram.fplu4-1.fna.fbcdn.net/v/t51.2885-15/234349571_2907646156215744_4447416705209812756_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fplu4-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=PuWXyPAxmjwAX9Z_Gep&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjYzNTE3NDM1OTA4ODQ3NjQ5Nw%3D%3D.2-ccb7-5&oh=00_AT_T4BtNNeASi_LU6efjXCqR2wrVkU1Z3mw5VwyUUmzqJw&oe=62EB888F&_nc_sid=30a2ef')
        break;
      default:
        console.log('error')
    }
  }
  return (
    <main id="Products" className={styles.productsContainer}>
      <div className={styles.productsWrapper}>
        <h2>Nossos Produtos</h2>

        <div className={styles.productsContent}>
          <div className={styles.productsButtonWrapper}>
            <button onClick={() => handleImageUrl('tables')}>
              Mesas <FiArrowRight />
            </button>
            <div className={styles.buttonDivider} />
            <button onClick={() => handleImageUrl('case')}>
              Estantes <FiArrowRight />
            </button>
            <div className={styles.buttonDivider} />
            <button onClick={() => handleImageUrl('buffet')}>
              Buffet <FiArrowRight />
            </button>
            <div className={styles.buttonDivider} />
            <button onClick={() => handleImageUrl('shelf')}>
              Prateleiras <FiArrowRight />
            </button>
          </div>

          <div className={styles.productsImg}>
            <Image
              src={`${imageSelected}`}
              alt="Mesa para board game"
              layout='fill'
              width={0}
              height={0}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  )
}