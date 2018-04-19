package core;

public class ColumnClass {
	private String columnName;
	private String columnType;
	private String changeColumnName;
	private String columnComment;

	public void setColumnName(String columnName) {
		this.columnName = columnName;
	}

	public String getColumnName(){
		return columnName;
	}

	public void setColumnType(String columnType) {
		this.columnType = columnType;
	}

	public String getColumnType(){
		return columnType;
	}

	public void setChangeColumnName(String changeColumnName) {
		this.changeColumnName = changeColumnName;
	}

	public String getChangeColumnName(){
		return changeColumnName;
	}

	public void setColumnComment(String columnComment) {
		this.columnComment = columnComment;
	}

	public String getColumnComment(){
		return columnComment;
	}
}