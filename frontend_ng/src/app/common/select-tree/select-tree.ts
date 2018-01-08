export class SelectTree {

  constructor(
  	public datas:Object,
    public changeSelect:() => void
  ){}

  public static defaultSelectTree = new SelectTree('', function () {})
}