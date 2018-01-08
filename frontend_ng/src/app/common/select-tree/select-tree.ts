export class SelectTree {

  constructor(
  	public treeData: Object,
  	public treeName: String
  ){}

  public static defaultSelectTree = new SelectTree('','selectTree')
}