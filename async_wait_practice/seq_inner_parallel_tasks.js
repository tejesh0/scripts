
var TaskRunner = class TaskRunner {
    constructor() {
    }
}

async function wrapper(task) {
    function inner(task) {
        return new Promise((resolve, reject) => {
            task(resolve)
        })
    }
    await inner(task)
}

TaskRunner.prototype.run = function (tasks) {
    async function main() {
        for (let i = 0; i < tasks.length; i++) {
            if (typeof (tasks[i]) == "function") {
                await wrapper(tasks[i])
            } else {
                await Promise.all(tasks[i].map(wrapper))
            }
        }
    }
    main()
}


function task1(done) {
    console.log('Task 1: Started');
    // Some async operation follows  
    setTimeout(function () {
        console.log('Task 1: Finished\n');
        done();
    }, 500);
};

function task2(done) {
    console.log('Task 2: Started');
    // Some async operation follows  
    setTimeout(function () {
        console.log('Task 2: Finished\n');
        done();
    }, 500);
};

function task3(done) {
    console.log('Task 3: Started');
    // Some async operation follows  
    setTimeout(function () {
        console.log('Task 3: Finished\n');
        done();
    }, 500);
};

function task4(done) {
    console.log('Task 4: Started');
    // Some async operation follows  
    setTimeout(function () {
        console.log('Task 4: Finished\n');
        done();
    }, 500);
};

function task5(done) {
    console.log('Task 5: Started');
    // Some async operation follows  
    setTimeout(function () {
        console.log('Task 5: Finished\n');
        done();
    }, 500);
};

var task_runner = new TaskRunner();

task_runner.run([task1, task2, [task3, task4], task5]);
