using System;

public class LinkedListNode<T>
{
    public T Value { get; set; }
    public LinkedListNode<T> Next { get; set; }

    public LinkedListNode(T value):base()
    {
        this.Value = value;
    }
}
