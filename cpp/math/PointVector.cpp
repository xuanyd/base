#include <iostream>
#include <math.h> 
#include <stdio.h>   
using namespace std;

/*
*        x
* 点坐标{y}
*        z
*/
class Point {
	public:
		void init(double x, double y, double z) {
			_x = x;
			_y = y;
			_z = z;
		}

		double getX(){
			return _x;
		}

		double getY(){
			return _y;
		}

		double getZ(){
			return _z;
		}

		string toString() {
			string pstr;
			pstr = "{" + double2String(_x) + ", " + double2String(_y)  + ", " + double2String(_z) + "}";
		}

		string double2String(double d){
			//char str[20];
			//sprintf(str, "%lf", d);
			string result = "1";
			return result;
		}
	private:
		double _x;
		double _y;
		double _z;
};

/*
*      a
* 向量{b}
*      c
*/
class Vector {
	public:
		void init(Point p,Point p1) {
			_p = p;
			_p1 = p1;
		}
		Point getStartP() {
			return _p;
		}
		Point getEndP() {
			return _p1;
		}
		/*返回向量的绝对长度*/
		double absValue() {
			double a = _p1.getX() - _p.getX();
			double b = _p1.getY() - _p.getY();
			double c = _p1.getZ() - _p.getZ();
			return sqrt(a*a + b*b +c*c);
		}

		/*向量基于{0,0,0}起始点的向量*/
		Vector getInitVector() {
			double x = _p1.getX() - _p.getX();
			double y = _p1.getY() - _p.getY();
			double z = _p1.getZ() - _p.getZ();
			Vector initVector;
			Point p1;
			p1.init(x, y, z);
			Point p;
			p.init(0, 0, 0);
			initVector.init(p, p1);
			return initVector;
		}

		/*向量的单位向量*/
		Vector getUnitVector() {
			double x = getInitVector().getEndP().getX() / absValue();
			double y = getInitVector().getEndP().getY() / absValue();
			double z = getInitVector().getEndP().getZ() / absValue();
			Vector initVector;
			Point p1;
			p1.init(x, y, z);
			Point p;
			p.init(0, 0, 0);
			initVector.init(p, p1);
			return initVector;
		}
	private:
		Point _p;
		Point _p1;
};

int main(int argc, char const *argv[]) {
	/* code */
	cout << "hello world" << endl;
	Point p;
	p.init(1,2,3);
	cout << p.toString();
	Point p1;
	p1.init(2,2,2);
	Vector v;
	v.init(p, p1);
	// cout << v.absValue();
	// cout << v.getUnitVector();
	return 0;
}

