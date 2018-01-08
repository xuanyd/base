export class Modal {

  constructor(
  	public title: String,
  	public content: String
  ){}

  public static defaultModal = new Modal('测试','提示')
}