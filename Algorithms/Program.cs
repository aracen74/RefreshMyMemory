using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Algorithms
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("starting...");

            //var number = 123456;

            //foreach (var item in Algorithms.NumberPermutaions(number))
            //{
            //    Console.WriteLine(item);
            //}

            Algorithms.WhatHappens_ToNodeNextsReferences_WhenYouSetTailToNull();
            Console.ReadKey();
        }
    }

    static class Algorithms
    {
        public static void WhatHappens_ToNodeNextsReferences_WhenYouSetTailToNull()
        {
            var linkedList = new LinkedList<int>();

            linkedList.AddToFront(new LinkedListNode<int>(3));
            linkedList.AddToFront(new LinkedListNode<int>(5));
            linkedList.AddToFront(new LinkedListNode<int>(7));

            var node = linkedList.Head;
            while(node != linkedList.Tail)
            {
                node = node.Next;
                var result = object.ReferenceEquals(node, linkedList.Tail);

                if (result)
                {
                    node.Value = 14;
                    result = object.ReferenceEquals(node, linkedList.Tail);

                    node = null; // will this delete it? No you can change properties but you can't delete another reference type by setting another reference type to null
                    result = object.ReferenceEquals(node, linkedList.Tail);
                }
            }

            

            linkedList.RemoveLast();
        }
        public static Queue<string> NumberPermutaions(int number)
        {
            // given some number of size N , find all permuations of each number in the number
            var numberAsString = number.ToString();


            // get the first number in number
            // get the length of the number

            var numberAsChar = numberAsString.ToCharArray();
            var lengthNumberAsChar = numberAsChar.Count();

            var input = new Queue<string>(numberAsChar.Select(c => c.ToString()));


            // now take the result list that is created and run again in a recursion, what is base condition to get out
            // when the lenght of all the results == lenght of original number
            return DoPermutations(input, numberAsChar, lengthNumberAsChar);

        }

        public static Queue<string> DoPermutations(Queue<string> input, char[] numberAsChar, int lengthNumberAsChar)
        {
            var results = input;
            var resultsLength = results.Count;


            if (results.First().Length == lengthNumberAsChar ) // My base condition to get out is is here
                return results;
            else
            {
                for (int i = 0; i < resultsLength; i++)     // My recursion is here
                {
                    var fifo = results.Dequeue();

                    for (int ii = 0; ii < lengthNumberAsChar; ii++)
                    {
                        results.Enqueue(string.Format("{0}{1}", fifo, numberAsChar[ii]));
                    }
                }
                //var soFar = results.Distinct().Select(c => int.Parse(c));
                return DoPermutations(results, numberAsChar, lengthNumberAsChar);
            }
        }
    }
}
