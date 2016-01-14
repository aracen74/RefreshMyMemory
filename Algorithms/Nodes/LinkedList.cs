using System;

public class LinkedList<T>
{
    public LinkedListNode<T> Head { get; set; } // provides pointer to start
    public LinkedListNode<T> Tail { get; set; } // provides pointer to end
    public int Count { get; private set; }

    public LinkedList()
    {
        Count = 0;
    }

    // the current and complete linked list is in the Head
    public void AddToFront(LinkedListNode<T> node)
    {
        LinkedListNode<T> temp = Head; // save off what you have to temp , first time Null = Null;

        Head = node; // make the new node the head , first time Set Head to some value from Null

        Head.Next = temp; // add the rest of the linked list, First time Head.Next = null .. which is expected
        Count++;

        if (Count==1)
        {
            Tail = Head;
        }


    }

    public void AddToEnd(LinkedListNode<T> node)
    {
        if (Count == 0)
        {
            Head = node;
        }
        else
        {
            Tail.Next = node;
            
            // are they pointing to the same address in memory?
        }
        Tail = node;
        Count++;
    }

    // Scott Allen to object share the same identity if they share the same memory address



    // I would think set Tail to Null
    // And set second to last Next value to Null
    // We have to objects pointing to the same reference variable Tail and SecondToLast.Next
    // If we set Tail to null does SecondToLast.Next become null
    // This doesn't work , but why
    public void RemoveLast()
    {
        if (Count == 0)
            return;

        if (Count == 1)
        {
            Head = null;
            Tail = null;
        }
        else
        {
            // you have to find the last node that is not the tail
            // set that to null
            // set that node to the Tail

        }
        Count--;
    }


}
