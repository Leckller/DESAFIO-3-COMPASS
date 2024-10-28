import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import CategoryEntity from "src/Category/Category.Entity";
import ImageEntity from "src/Image/Image.Entity";
import ImagesEntity from "src/Image/Images.Entity";
import ProductEntity from "src/Product/Product.Entity";
import { Repository } from "typeorm";

@Injectable()
export default class SeedsService {

  constructor(
    @InjectRepository(ImageEntity)
    private readonly imageRepo: Repository<ImageEntity>,
    @InjectRepository(ImagesEntity)
    private readonly imageProductRepo: Repository<ImagesEntity>,
    @InjectRepository(CategoryEntity)
    private readonly CategoryRepo: Repository<CategoryEntity>,
    @InjectRepository(ProductEntity)
    private readonly ProductRepo: Repository<ProductEntity>,
  ) { }

  public async seeds() {

    const isSpread = await this.ProductRepo.findOne({ where: { name: 'Syltherine' } });

    if (isSpread) {
      return;
    }

    // Imagens das Categorias
    // id 1
    const diningImg = this.imageRepo.create({
      imageLink: 'https://tinyurl.com/2snb3ndw',
    });

    // id 2
    const bedroomImg = this.imageRepo.create({
      imageLink: 'https://tinyurl.com/2ksy8yfu',
    });

    // id 3
    const livingImg = this.imageRepo.create({
      imageLink: 'https://tinyurl.com/du6wj89v'
    })

    await this.imageRepo.save([diningImg, bedroomImg, livingImg]);

    // Categorias

    const diningCat = this.CategoryRepo.create({
      name: 'Dining',
      image: diningImg,
    });

    const bredroomCat = this.CategoryRepo.create({
      name: 'Bedroom',
      image: bedroomImg
    });

    const LivingCat = this.CategoryRepo.create({
      name: 'Living',
      image: livingImg
    });

    await this.CategoryRepo.save([diningCat, bredroomCat, LivingCat]);

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
      category: bredroomCat,
    });

    const muggoProd = this.ProductRepo.create({
      name: 'Muggo',
      description: 'O sofá Muggo oferece conforto amplo e design contemporâneo, ideal para transformar qualquer espaço em um ambiente aconchegante.',
      large_description: 'O sofá Muggo é sinônimo de conforto e estilo, com um design moderno e acolhedor que se adapta a diferentes ambientes. Seu estofamento macio e espaçoso é perfeito para momentos de relaxamento. Feito com materiais duráveis e de alta qualidade, o Muggo proporciona uma experiência de conforto que complementa qualquer decoração.',
      price: 15250,
      discount_percent: 0,
      sku: '123123123', // Provisório
      category: LivingCat,
    });

    const pingkyProd = this.ProductRepo.create({
      name: 'Pingky',
      description: 'O sofá Pingky é fofo e acolhedor, com um design delicado que traz charme e conforto para qualquer ambiente.',
      large_description: 'Com estofado extra macio e um design encantador, o sofá Pingky transforma qualquer espaço em um ambiente aconchegante. Perfeito para relaxar, ele combina conforto e um toque de charme, ideal para quem busca suavidade e estilo. Seus materiais de alta qualidade garantem durabilidade, mantendo o ambiente sempre convidativo.',
      price: 15250,
      discount_percent: 0,
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
      category: bedroomImg,
    });

    const leviosaProd = this.ProductRepo.create({
      name: 'Leviosa',
      description: 'A cadeira Leviosa é um símbolo de leveza e elegância, com um design contemporâneo que traz estilo e conforto a qualquer ambiente.',
      large_description: 'A cadeira Leviosa combina um design inovador com conforto excepcional. Seu formato elegante e materiais leves fazem dela uma peça perfeita para adicionar um toque de sofisticação a qualquer espaço. Ideal para salas de jantar ou escritórios, a Leviosa oferece uma experiência de assento que eleva a decoração, tornando o ambiente mais acolhedor e moderno.',
      price: 15250,
      discount_percent: 0,
      sku: '123123123', // Provisório
      category: diningCat,
    });

    await this.ProductRepo.save([syltherineProd, lolitoProd, respiraProd, grifoProd, muggoProd, pingkyProd, pottyProd, leviosaProd]);


    // Images Product

    const syltherineProductImg = this.imageRepo.create({
      imageLink: 'https://bit.ly/3CaDjEY'
    });

    const leviosaProductImg = this.imageRepo.create({
      imageLink: 'https://bit.ly/3UhCDUy'
    });

    const respiraProductImg = this.imageRepo.create({
      imageLink: 'https://bit.ly/40mA9YX'
    });

    const lolitoProductImg = this.imageRepo.create({
      imageLink: 'https://bit.ly/40gBpgk'
    });

    const grifoProductImg = this.imageRepo.create({
      imageLink: 'https://bit.ly/4e3RSHC'
    });

    const muggoProductImg = this.imageRepo.create({
      imageLink: 'https://bit.ly/3NIGAxQ'
    });

    const pingkyProductImg = this.imageRepo.create({
      imageLink: 'https://bit.ly/3NIGLJw'
    });

    const pottyProductImg = this.imageRepo.create({
      imageLink: 'https://tinyurl.com/ye26wrfb'
    });

    await this.imageRepo.save([
      syltherineProductImg, leviosaProductImg, respiraProductImg, lolitoProductImg, grifoProductImg, muggoProductImg, pingkyProductImg, pottyProductImg
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

    await this.imageProductRepo.save([
      relationSyltherineImg, relationLeviosaImg, relationRespiraImg,
      relationLolitoImg, relationGrifoImg, relationMuggoImg,
      relationPingkyImg, relationPottyImg
    ])

  }

}
