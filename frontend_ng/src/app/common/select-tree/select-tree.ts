export class SelectTree {

  constructor(
    public data: String = '',
    public changeSelect:() => void
  ){}

  public static defaultSelectTree = new SelectTree('', function () {})
}