import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
// import AuthService from "src/Auth/Auth.Service";
import CategoryEntity from "src/Category/Category.Entity";
import ColorEntity from "src/Color/Color.Entity";
import ImageEntity from "src/Image/Image.Entity";
import ImagesEntity from "src/Image/Images.Entity";
import ProductEntity from "src/Product/Product.Entity";
import ReviewEntity from "src/Review/Review.Entity";
import SizeEntity from "src/Size/Size.Entity";
import TagEntity from "src/Tag/Tag.Entity";
import TagRelationEntity from "src/Tag/TagRelation.Entity";
import UserEntity from "src/User/User.Entity";
import { Repository } from "typeorm";

@Injectable()
export default class SeedsService {

  constructor(
    // private readonly authService: AuthService,
    @InjectRepository(ImageEntity)
    private readonly imageRepo: Repository<ImageEntity>,
    @InjectRepository(ImagesEntity)
    private readonly imageProductRepo: Repository<ImagesEntity>,
    @InjectRepository(CategoryEntity)
    private readonly CategoryRepo: Repository<CategoryEntity>,
    @InjectRepository(ProductEntity)
    private readonly ProductRepo: Repository<ProductEntity>,
    @InjectRepository(SizeEntity)
    private readonly sizeRepo: Repository<SizeEntity>,
    @InjectRepository(ColorEntity)
    private readonly colorRepo: Repository<ColorEntity>,
    @InjectRepository(ReviewEntity)
    private readonly reviewRepo: Repository<ReviewEntity>,
    @InjectRepository(TagEntity)
    private readonly tagRepo: Repository<TagEntity>,
    @InjectRepository(TagRelationEntity)
    private readonly tagRelationRepo: Repository<TagRelationEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) { }

  public async seeds() {

    const isSpread = await this.ProductRepo.findOne({ where: { name: 'Syltherine' } });

    if (isSpread) {
      return;
    }

    // Imagens das Categorias
    // id 1
    const diningImg = this.imageRepo.create({
      // imageLink: 'https://tinyurl.com/2snb3ndw',
      imageLink: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oCrdAUhTV222FyFLUoCNvwDeRHxQD~pwTH9bDEPo3HWxVlXFNXgXbz2f0IwDqqAJqpr06SCJ7R~riEncNSeNWjtWWvyVlbr1oa7CKHh9viTvbpOp4bERpVIvy8el~xk-lk4XwlUMDBUBrP22L9gLGHFPiHeagz4Jnvp7atGuYR4yKaeXwMYZuROYzRV29S-GvzHwqLLXENChS~KNnO6Qcv7wXI8RzXx7X28LAbgUs0x~65ZTrlZSWPPcjxmEjpvsJYeAXITX04fMKA9ZntdIqep6ipL1KaPQ4CcuQqh9ido0cIXCNuUbjKqOUebSAAJhjvTNFTw9CHdbCyXy6G4nYA__'
    });

    // id 2
    const bedroomImg = this.imageRepo.create({
      // imageLink: 'https://tinyurl.com/2ksy8yfu',
      imageLink: 'https://s3-alpha-sig.figma.com/img/b7e3/92a7/f3961ca2b1edab00f7a7640b3c2ed666?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mC8i~0f-kRzW5JsP29rItAx8iLklFpFxTPOd6klFJLz5E-Rkkd4baoJtxV9eYn7I1Qwf3BAhNsuqj7r94Jtoiz2UCkZzhqeepfkpzvF08IUmW9Lx1ZWHi-~~yPLb2Av~XNQ5qdZeWrowzwxRHyg2vbL4BwIPZrdvEuQaHx1ySTmZSTppeOvp1uqduc-IYT7MlXggg30JpoHvX2QgLZZB02FpuUmH0Fo1JSbpJM~sX9AnjlgLHtYHOvN7gbnxL3gjnm9kX2ty9469kpEA6cNTSR8cBeL4xoXn5pyY5WPOTQNG59jGuD1nMnciR8q~dhVlPWJnMhBDwmDFk7psSwBhDw__'
    });

    // id 3
    const livingImg = this.imageRepo.create({
      // imageLink: 'https://tinyurl.com/du6wj89v'
      imageLink: 'https://s3-alpha-sig.figma.com/img/77e4/946e/ec6e291e21c9694ce22e6c5b50d777fe?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RavgO~1jQlqAxNukq8i4pS~Z9C9FsRlxCjSAufpfEm8GSB8O2J~qRuMp0mdO3pXMIU2d9QQXmv3FROFR6ppAmjgpJsj7w-1FnhVazFICOQgAhK97mMAfY8F-NlqmdGd103F~V67H-uh~SSEuTnaxhMft7I73oAjFCL00MPW3uwakzMwMKy75P29YCVo5SDlhVuCcGu5TT5AjEq47VAW8D7Czd24FlGOLQnWTGmXdnegFcL-DPV6KzMZuUN6VqHybKkemLcQEkPFAaTwLUOgJ7hg0o4Y52tcdsYVoMOedGNgeWJmwyNrU2-yjXV8tBznlHWJadi~cEE3-Rio9271jwA__'
    })

    await this.imageRepo.save([diningImg, bedroomImg, livingImg]);

    // Categorias

    const diningCat = this.CategoryRepo.create({
      name: 'Dining',
      image: diningImg,
    });

    const bedroomCat = this.CategoryRepo.create({
      name: 'Bedroom',
      image: bedroomImg
    });

    const LivingCat = this.CategoryRepo.create({
      name: 'Living',
      image: livingImg
    });

    await this.CategoryRepo.save([diningCat, bedroomCat, LivingCat]);

    // Produtos

    const syltherineProd = this.ProductRepo.create({
      name: 'Syltherine',
      description: 'A cadeira Syltherine combina elegância e conforto com um design ergonômico, ideal para qualquer ambiente moderno.',
      large_description: 'A cadeira Syltherine foi projetada para aqueles que valorizam estilo e conforto em seu espaço. Com um design ergonômico que se adapta ao corpo, proporciona apoio e conforto ideais para longas horas de uso, seja no trabalho ou em momentos de lazer. Feita com materiais de alta qualidade e acabamentos sofisticados, a Syltherine une funcionalidade e elegância, trazendo um toque de modernidade e sofisticação para qualquer ambiente.',
      price: 3500,
      discount_percent: 30,
      sku: '123123123', //Provisório,
      category: diningCat,
    });

    const lolitoProd = this.ProductRepo.create({
      name: 'Lolito',
      description: 'O sofá Lolito oferece conforto luxuoso e um design compacto, perfeito para transformar seu espaço em um ambiente acolhedor e elegante.',
      large_description: 'O sofá Lolito é a escolha ideal para quem busca conforto e estilo em um design compacto. Com estofado macio e linhas modernas, ele se adapta a diferentes ambientes, trazendo aconchego e sofisticação. Seus materiais duráveis garantem beleza e conforto por muito tempo, valorizando qualquer espaço.',
      price: 14000,
      discount_percent: 50,
      sku: '123123123', // Provisório
      category: LivingCat,
    });

    const respiraProd = this.ProductRepo.create({
      name: 'Respira',
      description: 'A mesa de estar Respira combina design leve e funcionalidade, trazendo harmonia e elegância para qualquer ambiente.',
      large_description: 'A mesa de estar Respira possui um design minimalista e sofisticado, ideal para compor ambientes que buscam equilíbrio e leveza. Feita com materiais de alta qualidade, ela oferece durabilidade e estilo, além de ser perfeita para organizar e decorar seu espaço, trazendo um toque de elegância e funcionalidade.',
      price: 5000,
      discount_percent: 0,
      sku: '123123123', // Provisório
      category: LivingCat,
    });

    const grifoProd = this.ProductRepo.create({
      name: 'Grifo',
      description: 'A luminária Grifo combina design moderno e luz suave, criando uma atmosfera aconchegante e sofisticada em qualquer ambiente.',
      large_description: 'A luminária Grifo destaca-se pelo design elegante e funcional. Com uma luz suave e ajustável, é ideal para criar ambientes acolhedores e sofisticados, adaptando-se bem a diversos estilos de decoração. Feita com materiais de alta qualidade, Grifo é a escolha perfeita para quem valoriza beleza e versatilidade na iluminação.',
      price: 1500,
      discount_percent: 0,
      sku: '123123123', // Provisório
      category: bedroomCat,
    });

    const muggoProd = this.ProductRepo.create({
      name: 'Muggo',
      description: 'O sofá Muggo oferece conforto amplo e design contemporâneo, ideal para transformar qualquer espaço em um ambiente aconchegante.',
      large_description: 'O sofá Muggo é sinônimo de conforto e estilo, com um design moderno e acolhedor que se adapta a diferentes ambientes. Seu estofamento macio e espaçoso é perfeito para momentos de relaxamento. Feito com materiais duráveis e de alta qualidade, o Muggo proporciona uma experiência de conforto que complementa qualquer decoração.',
      price: 15250,
      discount_percent: 40,
      sku: '123123123', // Provisório
      category: LivingCat,
    });

    const pingkyProd = this.ProductRepo.create({
      name: 'Pingky',
      description: 'O sofá Pingky é fofo e acolhedor, com um design delicado que traz charme e conforto para qualquer ambiente.',
      large_description: 'Com estofado extra macio e um design encantador, o sofá Pingky transforma qualquer espaço em um ambiente aconchegante. Perfeito para relaxar, ele combina conforto e um toque de charme, ideal para quem busca suavidade e estilo. Seus materiais de alta qualidade garantem durabilidade, mantendo o ambiente sempre convidativo.',
      price: 15250,
      discount_percent: 20,
      sku: '123123123', // Provisório
      category: LivingCat,
    });

    const pottyProd = this.ProductRepo.create({
      name: 'Potty',
      description: 'O sofá Potty é minimalista e elegante, com linhas simples e design compacto que se adapta a qualquer espaço moderno.',
      large_description: 'O sofá Potty traz um toque de elegância minimalista, ideal para ambientes modernos e sofisticados. Com linhas simples e um design compacto, ele otimiza espaço sem abrir mão do conforto. Seus materiais de alta qualidade garantem durabilidade e estilo, sendo perfeito para quem aprecia uma estética clean e funcional.',
      price: 15250,
      discount_percent: 0,
      sku: '123123123', // Provisório
      category: bedroomCat,
    });

    const leviosaProd = this.ProductRepo.create({
      name: 'Leviosa',
      description: 'A cadeira Leviosa é um símbolo de leveza e elegância, com um design contemporâneo que traz estilo e conforto a qualquer ambiente.',
      large_description: 'A cadeira Leviosa combina um design inovador com conforto excepcional. Seu formato elegante e materiais leves fazem dela uma peça perfeita para adicionar um toque de sofisticação a qualquer espaço. Ideal para salas de jantar ou escritórios, a Leviosa oferece uma experiência de assento que eleva a decoração, tornando o ambiente mais acolhedor e moderno.',
      price: 15250,
      discount_percent: 10,
      sku: '123123123', // Provisório 
      category: diningCat,
    });

    const asgardProd = this.ProductRepo.create({
      name: 'Asgaard sofa',
      description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',
      large_description: 'Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact.',
      price: 25000,
      discount_percent: 0,
      sku: '123123123', // Provisório 
      category: LivingCat,
    });

    await this.ProductRepo.save([
      syltherineProd, lolitoProd, respiraProd,
      grifoProd, muggoProd, pingkyProd,
      pottyProd, leviosaProd, asgardProd
    ]);


    // Images Product

    const syltherineProductImg = this.imageRepo.create({
      //imageLink: 'https://bit.ly/3CaDjEY'
      imageLink: 'https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IAFeAEApIu25uSb~Oum2bKEZJhf0i2Sh-agD3s7pPuNSzUaMYosuKRBAssou4O3SPsCwtw0T7f4hjz~rAnPCAsRGoBf0ko0SiA35QWUM-Gbst8Dcc7SryVlNOZuvhcv8O6-j9pRkrz3XTMD4p1216tfL9UhaIG~ckZyyeHyLNJUnI2KgK255jTY8xA5jXqGYGrbq9rI~pqaFIQ3GGD4AVaOoiKlv0Q4MAVDh4O7xXxQjuicJvtbN2genYxm8BbixqpetaqPgcfwvrqM5Wskg~qVDl04UdbNAStiapCvtPExfAF1HJO9n7sBcz4Q0cP-vJNk-0fQ~B0SD4L9VlZBx4w__'
    });

    const leviosaProductImg = this.imageRepo.create({
      //imageLink: 'https://bit.ly/3UhCDUy'
      imageLink: 'https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l0ZXRed~mXKcXMEPf1Bv10gKTIs6lNiGBRnvylaW3gcqZoh0Kqt9PEbdJGFxcOPSYBQIICqUIu9U3inehuRArxQiPtSlHbWQ7gZmuQiG4qY69eIxNZMvHt3sftX2NquoOTIiAgFlJnAGYLTiukylYIFtOIQ1VkazJpkU4D-B0kWgu~kgNtWePQ7E25kzWBeeK-FlFn4CJ4w~sYbS7JbTCRHbDxtyD7p2i-vJNnL3M-~pwxtfW-gYmNRnb-4e3aw7Fzmj6VXK5OJBAjPBTO61SNczgqHgBv7mZfqNS5cXsBKvPYIChlzC0ShBjzdQ-LaOhYXNIo1rqpQKYI1tz9h6WA__'
    });

    const respiraProductImg = this.imageRepo.create({
      // imageLink: 'https://bit.ly/40mA9YX'
      imageLink: 'https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TCHH1b6YHkgRgIjgD--5~U6aDBvhRoK~R-RXRWa25U5e2NFbIfQ8~aEouK8sCbzCArLJehT4toOY3IiLh1oFIDYQFpCYTrz3bRtbCYqcxXYrXAn7IzVabk3bbHx7z3Phi9w-E7Z1dueDYLhzDtb~WZf5MJM1dhnSkJcZ-GXqAFIUmroXZmHExRnoKU3-1lSsDo-L~~5IMm39J3SbaCNUAv~bBD7Ob1YRrAchW~aPbMsDYcpTPTSKZXS0ZDPsjOhDHAOgePRlSdy4-CBfLJ4y9RvIzNmi0xN~r5M11bgr11m~VWb3NGQ4m7Shs32Gy-39mLwdkMlEp8MS39dToto8ug__'
    });

    const lolitoProductImg = this.imageRepo.create({
      // imageLink: 'https://bit.ly/40gBpgk'
      imageLink: 'https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K9yazLUHomDk8Nw~0PQbCRG5MLpqG6ejQStgUn7iySdFKK~p3XiYIqKE7bR~d6mpcHWxYQbDt-L8QIgoW3nMXJw1gaie-yF2FjemxACD8qT5FOIUkwHUY0vpc4QvBFKrbMlr2nljFfrw8RedDgx2bwaJYBvIvs57yZC1JjX61n1cmd4vG02Zz8h1dTC384tD9R5W3ZYmyf6sn5RDFe2lwHItECfCaERJsyr1Q~dzR62Z~aXJU8A5sDHNZ7hJjxKJ~AufnuVAnnNAKObZt68-83EAl4C-oWSiSZADSKqSssvypr76cZ9PWg8I79VnrSobXtkQn~8FF1ZaJ-rfJdvGkg__'
    });

    const grifoProductImg = this.imageRepo.create({
      // imageLink: 'https://bit.ly/4e3RSHC'
      imageLink: 'https://s3-alpha-sig.figma.com/img/50f3/12dc/a7c05024ab4e27374edb12195b6559e2?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fs3SpylheIFoboMoFdrt-yV-4W9lmuj8pStaARKmg59sVIlSIhjqmjKnU~Pp92593ai-8zcKGW4pywQIoPB9pGE5P3bDFxTLFxJ7tUunpLe8HYCitnDcsFLYTIC30FvMZ-IkVSOx0LIxG0JRuN1CIlmTMqSCpbWlgTb-u~S-~UCwpuHUj~nuuWxFYzIBT~YayjF8SxQP8D3DMdBQYx2oksVjLD5j-Cz3EywOhDXtwZiYor3jXcaHCSgSxsMqPsy7g5HR3HMhvbUYt4HqXhLFs6~Wg2LmSm6c0l2CEAblsnDNVDMEHqoI5rLgLetdW6WFlz-kU3T6s1GIiRzoB9pxww__'
    });

    const muggoProductImg = this.imageRepo.create({
      //imageLink: 'https://bit.ly/3NIGAxQ'
      imageLink: 'https://s3-alpha-sig.figma.com/img/b609/6926/ea43a4c55f9e28aa3592f17ff47a4303?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lccvGL9jmiHvQqomYOh8ts9Jj2LIQdLIJ8SqrExxYCGSqK7CurJ-b6pysrzyAQO8L9dsUksuyZSU4Gc6dEJzO5c56HokjXPbZuvy-URr38YvNQHRxWBNpBMJUSvRYc4G2fhG-U2-7NWJRvqOw9rCb3TziOqDV2zrVbHjNDk9E0g3hTNKSzk9mIgeLpAdND0ZUQr~0RowU9j9ZdQedi7RautFxHovXlvqfQW1yujYc7UYTETfzlxYzA1n12Xe5Hh28Q0-AgIHekHhA7X4rbtS8rmyYcQviHlJLkCaRDITg7MNil7m-5e0L0I48D19Eu5qLfBXxOG7N9EskhgjZ61tSg__'
    });

    const pingkyProductImg = this.imageRepo.create({
      // imageLink: 'https://bit.ly/3NIGLJw'
      imageLink: 'https://s3-alpha-sig.figma.com/img/8d34/199d/e77ede2f478b2f26210bd264978981f6?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DJvWsHwf-bIZONI7CnM6DkMeEVBNW5BcuTBX8i-t0YXjCxm5ixMct~XLQtX2pX2VFOq4DEuR4zQseAv~rYC2Gr57d2LTydH6RXnJjKHdIIEXlAqlqtZvu4Gr3DLOaGsBwKGlVax-q-mesT73HkdKAXhSrvHB-PNum0aqw4pVkxeySD~~4h5gnxcxga6syp0Zqav4FcP8~0TWdOWfHAUsnS5s-TdpVr26c-lHYi0CaHu5dN8lLz2Z61CJ88luRDl9w9ztfNNBFWcdNc1YeIwvnCp35RQeeasss3O36Pyodw2pDqV83LTZ3xaUfus-yRF~2LC7nxYH9bH8RytZ6ZwKBg__'
    });

    const pottyProductImg = this.imageRepo.create({
      // imageLink: 'https://tinyurl.com/ye26wrfb'
      imageLink: 'https://s3-alpha-sig.figma.com/img/6028/dfe0/3d98b27fb98ee49958d7089f10d39dfe?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ui~W7UzwAMQ7BmAWzfchgKqwxm-7DQPYiuVfaelxEdWiFElqljfi287874ZIQRhDPwLVDIDuUPxfdUM6b3Jp81Dp1OVqrEhQJCMwV-fPeA7-fCg3ed65KcB~W4wc0PRGyKrTj0~GHe~du9Lc--Ucial1Pqj0UgPzTGKZFO6QIkDZk7Y0csitsU6DK88rfldaSOIgKzVFr-NZMSklUTOrdcm43EmpAfY1CQlurpHM6ip8mrvbTi9-w04rgkMflzOlBGHtcOCierx2j8dhSRhZPSeTDEZECfXMSzEdUKQcp-Oj1q9Vgj7FT-HmYwC0Tdh3Bp-QXD1xFxMJ5ZbVjbPXGg__'
    });

    const asgardProductImg = this.imageRepo.create({
      // imageLink: 'https://tinyurl.com/kkzayxz6'
      imageLink: 'https://s3-alpha-sig.figma.com/img/2ac4/13c1/917ac944454e358f73d0af67e1f1b74e?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pkmJsS54gldxY~T6~1Vv8boYAZs-04gJZWAOGOtnYoYjJPYWr3rPEMZRU-0cM3hIGouOVZTBAS91X~AWfQTVW0mWonbbkg9MtuJAuBB~1eUFbx9IMCtkCpatyMYMa3KnZ0YlEfzXnRAE14D26S95D9gtIfgdAKeaKyLFwYfjphmkFlBEwZuEBJfXt1YInGn1-dX5kUB-Quy1NyrzwuJUPR8Gd2JBT~NdD9NlmZxnnGv0Se~~q7TmCyKHIEsbQcAvTDY7Czsb5jq2smgrMgfwp1QmUDQlbStq0~eOtYDTmy2bKp4Puc3s0EeAau1crG3KzYnDHduAT5kLIEcJNZOHAQ__'
    });
    const asgardProductImg2 = this.imageRepo.create({
      // imageLink: 'https://tinyurl.com/2xvpzsku'.
      imageLink: 'https://s3-alpha-sig.figma.com/img/e8e6/980e/c9e9224b3002d53824688ecee9c882c5?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E7QC8KA3~9l25vkL8DuCynd7Q8huvr4OKXWHP78bwI0XlMxMjnVWt0vCHp8J7uckkDMImI3vjM94QlmqBXfy48ha32pYVwZlIE7LCSfhHmTnSAW-s5ByeFefLezPFBLSZiIJgPQGgR~Vw3bZ1lIu21Epl67Ab80zLJitQwteE61HBuOYYn7nFnwGICcUKFXwsENoqIvEaVzUSuE-JAKT5rNNy22TvUuU~6dXyGigx5KER~Dzu1yIHZI~93q15u8oRoooEcbBsxaca6A1ec8Xb2rBY00Lp~yu38J70gLUuTcngRPeaxmCn8yR5y3cLhiB9lYwU5v7C0~pbN~9G3WjRg__'

    });
    const asgardProductImg3 = this.imageRepo.create({
      // imageLink: 'https://tinyurl.com/5xmvzyye'
      imageLink: 'https://s3-alpha-sig.figma.com/img/4d65/4cce/148fae44b3bf6e9ac8ce6743c19e7de6?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jHc7kfjsMn0mjA3C3XFYE5-Yvru1DGToSMQQTp6M-gSsVOZJcGX8AmfsV7vRm92Mlmy7KcUdMnqlOaqNuUz2pfmubxoOPxdaIhvytQ5IQZA9anh4ywSGK9YViy6pqDKj-Xajxxn9ij3zGYOxcCQizww1hgGYONS886WXCRVWXywu6X-BEf0XEDnPOUU2s2NHLQQH18K96GS8XwgtbRX2OL3eN0jfVrRx3KaNxzPSn3Ic3OxN~fbOkJqeDlRGsDAkQ5ki0nOdUzU3G6RBvXhFOSkwPUiYDxQR6IREwTHHTi-rpTIl3y9dmcJKF8a-nvrIE-M9FPbVN2rdwHIzua7d-A__'
    });

    await this.imageRepo.save([
      syltherineProductImg, leviosaProductImg, respiraProductImg, lolitoProductImg, grifoProductImg, muggoProductImg, pingkyProductImg, pottyProductImg,
      asgardProductImg, asgardProductImg2, asgardProductImg3
    ]);

    // Relacionamento Imagem Produto

    const relationSyltherineImg = this.imageProductRepo.create({
      image: syltherineProductImg,
      product: syltherineProd,
    });

    const relationLeviosaImg = this.imageProductRepo.create({
      image: leviosaProductImg,
      product: leviosaProd,
    });

    const relationRespiraImg = this.imageProductRepo.create({
      image: respiraProductImg,
      product: respiraProd,
    });

    const relationLolitoImg = this.imageProductRepo.create({
      image: lolitoProductImg,
      product: lolitoProd,
    });

    const relationGrifoImg = this.imageProductRepo.create({
      image: grifoProductImg,
      product: grifoProd,
    });

    const relationMuggoImg = this.imageProductRepo.create({
      image: muggoProductImg,
      product: muggoProd,
    });

    const relationPingkyImg = this.imageProductRepo.create({
      image: pingkyProductImg,
      product: pingkyProd,
    });

    const relationPottyImg = this.imageProductRepo.create({
      image: pottyProductImg,
      product: pottyProd,
    });

    const relationAsgardImg = this.imageProductRepo.create({
      image: asgardProductImg,
      product: asgardProd,
    });
    const relationAsgardImg2 = this.imageProductRepo.create({
      image: asgardProductImg2,
      product: asgardProd,
    });
    const relationAsgardImg3 = this.imageProductRepo.create({
      image: asgardProductImg3,
      product: asgardProd,
    });

    await this.imageProductRepo.save([
      relationSyltherineImg, relationLeviosaImg, relationRespiraImg,
      relationLolitoImg, relationGrifoImg, relationMuggoImg,
      relationPingkyImg, relationPottyImg,
      relationAsgardImg, relationAsgardImg2, relationAsgardImg3
    ])

    // Colors && Sizes

    const colors = ['red', 'blue'];
    const sizes = ['XL', 'L'];

    const products = [
      syltherineProd, lolitoProd, respiraProd,
      grifoProd, muggoProd, pingkyProd,
      pottyProd, leviosaProd, asgardProd
    ];

    products.forEach(async (prod) => {
      const colorProd = this.colorRepo.create({
        color: colors[0], product: prod
      });
      const colorProd2 = this.colorRepo.create({
        color: colors[1], product: prod
      });
      const sizeProd = this.sizeRepo.create({
        size: sizes[0], product: prod
      });
      const sizeProd2 = this.sizeRepo.create({
        size: sizes[1], product: prod
      });

      await this.colorRepo.save([colorProd, colorProd2])
      await this.sizeRepo.save([sizeProd, sizeProd2])
    });

    // Users e Reviews
    // await this.authService.encrypt("Flamengo123!");
    // await this.authService.encrypt("#Bike123!");
    // await this.authService.encrypt("Vasco123!");

    const userKayo = this.userRepo.create({
      email: 'kayo@gmail.com', password: "Flamengo123!", name: 'Kayo', adm: false,
    });
    const userFran = this.userRepo.create({
      email: 'fran@gmail.com', password: "#Bike123!", name: 'Fran', adm: true
    });
    const userMorghana = this.userRepo.create({
      email: 'Morghana@gmail.com', password: "Vasco123!", name: 'Morghana', adm: false,
    });

    await this.userRepo.save([userKayo, userFran, userMorghana]);

    const stars = [4, 3, 5];
    const comments = ['Good Product', 'Nice Product', 'Awesome Product'];

    products.forEach(async (prod) => {

      const review = this.reviewRepo.create({
        comment: comments[0], product: prod, stars: stars[0], user: userKayo
      });
      const review2 = this.reviewRepo.create({
        comment: comments[1], product: prod, stars: stars[1], user: userFran
      });
      const review3 = this.reviewRepo.create({
        comment: comments[2], product: prod, stars: stars[2], user: userMorghana
      });

      await this.reviewRepo.save([review, review2, review3]);

    });

    // Tags

    const tagsName = ['Sofa', 'Chair', 'Table'];

    products.forEach(async (prod) => {

      const tags = tagsName.map((tag) => this.tagRepo.create({ name: tag }));
      await this.tagRepo.save([...tags]);

      const tagsRelation = tags.map((tag) => this.tagRelationRepo.create({ tag, product: prod }));
      await this.tagRelationRepo.save([...tagsRelation]);

    });

  }

}
