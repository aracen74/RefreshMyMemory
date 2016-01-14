(function () {

    var perfHub = $.connection.perfHub;
    $.connection.hub.logging = true;
    $.connection.hub.start();

    perfHub.client.newMessage = function (message) {
        model.addMessage(message); // the event handling on the js side after the c# web app executes
    };

    perfHub.client.newCounters = function (counters) {
        model.addCounters(counters);
    };

    var ChartEntry = function (name) {
        var self = this;

        self.name = name;
        self.chart = new SmoothieChart({ millisPerPixel: 50, labels: { fontSize: 15 } });
        self.timeSeries = new TimeSeries(); // Scott refers to js objects as "abstractions" , that's one way to look at a class
        self.chart.addTimeSeries(self.timeSeries, { lineWidth:3, strokeStyle: "#00ff00"});
    }

    ChartEntry.prototype = {

        addValue: function (value) {
            var self = this;
            self.timeSeries.append(new Date().getTime(), value);
            // smoothie expects a time stamp with value
            // this date is not in sync with server and doesn't really need it , we could send it in the dynamic results
        },

        start: function () {
            var self = this;
            self.canvas = document.getElementById(self.name);
            self.chart.streamTo(self.canvas);

        },
    };

    var Model = function () {
        
        var self = this; // it's a way to conveniently handle call back problems
        self.message = ko.observable("");
        self.messages = ko.observableArray();
        self.counters = ko.observableArray();
    };

    Model.prototype = {
         
        addCounters: function (updatedCounters) {
            var self = this;

            $each(updatedCounters, function (index, updatedCounter) {

                    var entry = ko.utils.arrayFirst(self.counters(), // is there an Entry in Counters of type "ChartEntry" ?
                        function (counter) {
                            return counter.name == updatedCounter.name; // like a LINQ Predicate {c => c.name == u.name }
                        });

                    if (!entry) {
                        entry = new ChartEntry(updatedCounter.name); // if not start a ChartEntry?
                        self.counters.push(entry);
                        entry.start();
                    }
                    entry.addValue(updatedCounter.value); // Always add a value to the existng Counter in Counters of type "ChartEntry"
                });
        },

        sendMessage: function () {
            var self = this;
            perfHub.server.send(self.message());
            self.message("");
        },

        addMessage: function (message) {
            var self = this;
            self.messages.push(message);
        }
    }

    var model = new Model();

    $(function () {
        ko.applyBindings(model);
    });
    // $data - In knockout - use when getting a value from a primitive array of type string in js 
    // jquery document read "$(function () " like an IIFE with a dollar sign in front
}());