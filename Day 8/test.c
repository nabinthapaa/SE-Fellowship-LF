#include <stdio.h>

int sum(int a, int b){
    int add(int x, int y){
        return x + y;
    }

    return add(a, b);
}
void main(){
    int a = sum(1, 2);
    printf("%d", a);
}
