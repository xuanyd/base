#include<windows.h>
#include <GL/gl.h>
#include <GL/glaux.h>
 
void main(void) {
  auxInitDisplayMode(AUX_SINGLE|AUX_RGBA);
  auxInitPosition(0,0,500,500);
  auxInitWindow("str");
  glClearColor(0.0,0.0,0.0,0.0);
  glClear(GL_COLOR_BUFFER_BIT);
  glColor3f(1.0,0.0,0.0);
  glRectf(-0.5,-0.5,0.5,0.5);
  glFlush();
  _sleep(1000);
}