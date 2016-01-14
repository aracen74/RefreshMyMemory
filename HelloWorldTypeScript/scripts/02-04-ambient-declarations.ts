/// <reference path="knockout.d.ts" />

// you don't have to decalre this anymore, just use it
//     declare var ko;


module demo_02_04 {

    var name = ko.observable('John Papa');
    var id = ko.observable(1);

    var guy = {
        id: id,
        fullName: name
    };

    var value: string = guy.fullName();
    console.log(value);

    var age: number = 21;
    var score: number = 34.86;
    var hasData: boolean = true;

    var doNothing = function (args) {
        return args;
    }

    var isBald = function () {
        return 'yes';
    }

    var names: string[] = ['john', 'dan', 'aaron', 'fritz'];
}