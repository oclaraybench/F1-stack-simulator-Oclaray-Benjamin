
class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }

    // Add element to top of stack
    push(element) {
        this.items[this.count] = element
        this.count += 1
        return element
    }

    // Remove top element
    pop() {
        if (this.count == 0) return undefined

        let deleteItem = this.items[this.count - 1]
        this.count -= 1

        return deleteItem
    }

    // Check top element
    peek() {
        if (this.count == 0) return undefined

        return this.items[this.count - 1]
    }

    // Check if stack is empty
    isEmpty() {
        return this.count == 0
    }

    // Check stack size
    size() {
        return this.count
    }

    // Clear stack
    clear() {
        this.items = []
        this.count = 0
    }
}

const stack = new Stack()

// Display stack values
function displayStack() {
    $("#stack").empty()

    for (let i = stack.count - 1; i >= 0; i--) {
        let block = $("<div>")
        block.addClass("row bg-primary push mb-1")
        block.text(stack.items[i])

        $("#stack").append(block)
    }
}

$(document).ready(function() {

    // Initial sample values
    stack.push(100)
    stack.push(200)
    stack.push(300)
    stack.push(400)

    displayStack()

    // Push button
    $("#pushBtn").click(function() {
        let value = $("#stackInput").val().trim()

        if (value == "") {
            $("#message").text("Please enter a value.")
            return
        }

        stack.push(value)

        $("#stackInput").val("")
        $("#message").text(value + " added to stack.")

        displayStack()
    })

    // Pop button
    $("#popBtn").click(function() {
        let deleted = stack.pop()

        if (deleted == undefined) {
            $("#message").text("Stack is empty.")
            return
        }

        $("#deleted").empty()
        $("#deleted").append(
            $("<div>").addClass("row pop text-bg-danger border border-light").text(deleted)
        )

        $("#message").text(deleted + " removed from stack.")

        displayStack()
    })

    // Peek button
    $("#peekBtn").click(function() {
        let top = stack.peek()

        if (top == undefined) {
            $("#message").text("Stack is empty.")
            return
        }

        displayStack()

        $("#stack .push").first().addClass("border border-warning border-3")

        $("#message").text("Top element is " + top)
    })

    // Clear button
    $("#clearBtn").click(function() {
        stack.clear()

        $("#deleted").empty()
        $("#message").text("Stack cleared.")

        displayStack()
    })

})
