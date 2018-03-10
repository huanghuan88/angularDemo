import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

 private products:Product[]=[
  		new Product(1,"第一个商品",1.99,3.5,"huanghuan1",["电子产品","服装"] ),
  		new Product(2,"第二个商品",2.99,4.5,"huanghuan2",["电子产品","服装"] ),
  		new Product(3,"第三个商品",3.99,3.5,"huanghuan3",["电子产品","服装"] ),
  		new Product(4,"第四个商品",4.99,4.5,"huanghuan4",["电子产品","服装"] ),
  		new Product(5,"第五个商品",5.99,3.5,"huanghuan5",["电子产品","服装"] ),
  		new Product(6,"第六个商品",6.99,3.5,"huanghuan6",["电子产品","服装"] ),

  	]

  private comments:Comment[]=[
  	new Comment(11,1,"2027-02","张三1",3,"东西不错"),
  	new Comment(12,1,"2027-03","张三2",3,"东西不错"),
  	new Comment(13,3,"2027-04","张三3",3,"东西不错"),
  	new Comment(14,4,"2027-05","张三4",3,"东西不错"),
  ]
  constructor() { }

  getProducts(){
  	return this.products;
  }
  getProduct(id:number):Product{
    return this.products.find((product)=>product.id==id);
  }

  getCommentsForProductId(id:number):Comment[]{
  	return this.comments.filter((comment:Comment)=>comment.productId==id);
  }


}
export class Product{
	constructor(
		public id:number,
		public title:string,
		public price:number,
		public rating:number,
		public desc:string,
		public category:Array<string>
		){

	}
}
export class Comment{
	constructor(
		public id:number,
		public productId:number,
		public timestamp:string,
		public user:string,
		public rating:number,
		public content:string
		){

	}
}
