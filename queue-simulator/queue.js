
class Queue {
    constructor() {
        this.items = []
    }

    // Add element to rear
    enqueue(element) {
        this.items.push(element)
        return element
    }

    // Remove element from front
    dequeue() {
        if (this.items.length == 0) return undefined

        return this.items.shift()
    }

    // Check front element
    peek() {
        if (this.items.length == 0) return undefined

        return this.items[0]
    }

    // Check if queue is empty
    isEmpty() {
        return this.items.length == 0
    }

    // Check queue size
    size() {
        return this.items.length
    }

    // Clear queue
    clear() {
        this.items = []
    }
}

const queue = new Queue()

// Display queue values
function displayQueue() {
    $("#queue").empty()

    for (let i = 0; i < queue.items.length; i++) {
        let block = $("<div>")
        block.addClass("row bg-primary push mb-1")
        block.text(queue.items[i])

        $("#queue").append(block)
    }
}

$(document).ready(function() {

    // Enqueue button
    $("#enqueueBtn").click(function() {
        let value = $("#queueInput").val().trim()

        if (value == "") {
            $("#message").text("Please enter a value.")
            return
        }

        queue.enqueue(value)

        $("#queueInput").val("")
        $("#message").text(value + " added to queue.")

        displayQueue()
    })

    // Dequeue button
    $("#dequeueBtn").click(function() {
        let deleted = queue.dequeue()

        if (deleted == undefined) {
            $("#message").text("Queue is empty.")
            return
        }

        $("#deleted").empty()
        $("#deleted").append(
            $("<div>").addClass("row pop text-bg-danger border border-light").text(deleted)
        )

        $("#message").text(deleted + " removed from queue.")

        displayQueue()
    })

    // Peek button
    $("#peekBtn").click(function() {
        let front = queue.peek()

        if (front == undefined) {
            $("#message").text("Queue is empty.")
            return
        }

        displayQueue()

        $("#queue .push").first().addClass("border border-warning border-3")

        $("#message").text("Front element is " + front)
    })

    // Clear button
    $("#clearBtn").click(function() {
        queue.clear()

        $("#deleted").empty()
        $("#message").text("Queue cleared.")

        displayQueue()
    })

})
