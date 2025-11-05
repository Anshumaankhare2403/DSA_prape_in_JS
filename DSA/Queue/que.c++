#include <iostream>
using namespace std;
const int M = 5;
int arr[M];
int front = -1;
int rear = -1;

void enqueue(int data)
{
    if (rear == M - 1)
    {
        cout << "Queue overflow";
        return;
    }
    if (front == -1)
    {
        front = 0;
    }
    rear = rear + 1;
    arr[rear] = data;
    cout << "Enqueue done :-" << data;
}

void display()
{
    if (front == -1)
    {
        cout << "Queue is empty!" << endl;
        return;
    }

    cout << "Queue elements: ";
    for (int i = front; i <= rear; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main()
{

    enqueue(10);
    enqueue(20);
    enqueue(30);
    enqueue(40);
    enqueue(50);
    enqueue(60);

    display();

    return 0;
}