let questions = [
    {
        numb: 1,
        question: "In MapReduce, what happens in the Reduce phase?",
        answer: "b) Intermediate key-value pairs are processed and aggregated",
        options: [
            "a) The input data is split into chunks",
            "b) Intermediate key-value pairs are processed and aggregated",
            "c) Data is sorted before processing",
            "d) New key-value pairs are created"
        ]
    },
    {
        numb: 2,
        question: "______________function merges all intermediate values associated with the same intermediate key.",
        answer: "B) Reduce",
        options: [
            "A. Map",
            "B. Reduce",
            "C. Both Map and Reduce",
            "D. None of the mentioned"
        ]
    },
    {
        numb: 3,
        question: "Choose the correct items for X, and Y. The Map phase is subdivided into M pieces and the reduce phase into R pieces. There are practical bounds on how large M and R can be, since the master must make X scheduling decisions and keeps Y state in memory.",
        answer: "A) X: O(M + R), Y: O(M * R)",
        options: [
            "A. X: O(M + R), Y: O(M * R)",
            "B. X: O(M*R), Y: O(M * R)",
            "C. X: O(M + R), Y: O(M + R)",
            "D. X: O(M * R), Y: O(M + R)"
        ]
    },
    {
        numb: 4,
        question: "Peer-to-peer (P2P) network systems use ___________________organization of the network overlay for flexibly sharing resources (e.g., files and multimedia documents) stored across network-wide computers.",
        answer: "D) Application-level",
        options: [
            "A. Physical-level",
            "B. Network-level",
            "C. Transport-level",
            "D. Application-level"
        ]
    },
    {
        numb: 5,
        question: "In Cassandra, ______________job is to determine which data centers and racks it should use to read data from and write data to.",
        answer: "C) Snitch",
        options: [
            "A. Client requests",
            "B. Partitioner",
            "C. Snitch",
            "D. None of the mentioned"
        ]
    },
    {
        numb: 6,
        question: "Cassandra uses a protocol called _______ to discover location and state information.",
        answer: "B) Gossip",
        options: [
            "A. HBase",
            "B. Gossip",
            "C. Key-value",
            "D. None of the mentioned"
        ]
    },
    {
        numb: 7,
        question: "Consider the following statements: Statement 1: Scale out means grow your cluster capacity by replacing with more powerful machines. Statement 2: Scale up means incrementally grow your cluster capacity by adding more COTS machines (Components Off the Shelf).",
        answer: "D) Both statements are false",
        options: [
            "A. Only statement 1 is true",
            "B. Only statement 2 is true",
            "C. Both statements are true",
            "D. Both statements are false"
        ]
    },
    {
        numb: 8,
        question: "A bloom filter is a bit vector V with m entries and k (ideally-independent) hash functions. To insert a new element i, we set V[hj(i)] =1 for each of the k hash functions hj. To check whether an element i is in the set, we AND together each value V[hj(i)] for all k hash functions. The optimal number of hash functions is k=𝑚𝑚 𝑛𝑛ln2. For that number of hash functions, and given a choice of false positive rate, the ratio 𝑚𝑚 𝑛𝑛 = − 𝑙𝑙𝑙𝑙𝑙𝑙 (𝑙𝑙𝑙𝑙2)2 , where n is the number of keys in the table and p is the false positive rate. Compute the approximate number of bits per entry and the number of hash functions needed for a false positive rate of 1%.",
        answer: "B) 9.6 bits per key and 7 hash functions",
        options: [
            "A. 6.6 bits per key and 6 hash functions",
            "B. 9.6 bits per key and 7 hash functions",
            "C. 12.6 bits per key and12 hash functions",
            "D. 9.6 bits per key and 6 hash functions"
        ]
    },
    {
        numb: 9,
        question: "Apache Cassandra is a massively scalable open source _______ database.",
        answer: "C) NoSQL",
        options: [
            "A. SQL",
            "B. NewSQL",
            "C. NoSQL",
            "D. None of the mentioned"
        ]
    },
    {
        numb: 10,
        question: "The ____________________may arise when a process rolls back to its checkpoint after a failure and requests all the other affected processes also to roll back.",
        answer: "D) Livelock problem",
        options: [
            "A. Rollback",
            "B. Phantom Effect",
            "C. Domino Effect",
            "D. Livelock problem"
        ]
    },
    {
        numb: 11,
        question: "Cascaded rollback which causes the system to roll back to too far in the computation (even to the beginning), in spite of all the checkpoints is known as_______________________.",
        answer: "C) Domino Effect",
        options: [
            "A. Rollback",
            "B. Phantom Effect",
            "C. Domino Effect",
            "D. Livelock"
        ]
    },
    {
        numb: 12,
        question: "True or False? 'Koo-Toueg algorithm is a uncoordinated checkpointing and recovery technique that takes a consistent set of checkpointing and avoids domino effect and livelock problems during the recovery.'",
        answer: "B) False",
        options: [
            "A. True",
            "B. False"
        ]
    },
    {
        numb: 13,
        question: "Find out the correct model for the given assumptions of a system: Assumption 1: Each message is received within bounded time. Assumption 2: Drift of each process’ local clock has a known bound. Assumption 3: Each step in a process takes lb < time < ub , where lb represents lower bound and ub represents an upper bound.",
        answer: "B) Synchronous distributed system",
        options: [
            "A. Asynchronous distributed system",
            "B. Synchronous distributed system",
            "C. On demand computing system",
            "D. Parallel processing system"
        ]
    },
    {
        numb: 14,
        question: "True or False? 'Byzantine agreement cannot be reached among three processors if one processor is faulty.'",
        answer: "A) True",
        options: [
            "A. True",
            "B. False"
        ]
    },
    {
        numb: 15,
        question: "Consider the following statements: Statement 1: Lamport’s algorithm achieves mutual exclusion. Statement 2: Lamport’s algorithm is fair.",
        answer: "C) Both statements are true",
        options: [
            "A. Only statement 1 is true",
            "B. Only statement 2 is true",
            "C. Both statements are true",
            "D. Both statements are false"
        ]
    },
    {
        numb: 16,
        question: "True or False? The Chandy-Lamport global snapshot algorithm works correctly for non-FIFO channels.",
        answer: "B) False",
        options: [
            "A. True",
            "B. False"
        ]
    },
    {
        numb: 17,
        question: "A client's clock reads 3:20:00. The server's clock reads 3:10:00 when they synchronize using the Berkeley algorithm. Assume message delays are negligible. What is the time at the client after synchronization?",
        answer: "D) 3:15:00",
        options: [
            "A. 3:20:00",
            "B. 3:10:00",
            "C. 6:30:00",
            "D. 3:15:00"
        ]
    },
    {
        numb: 18,
        question: "Consider the following statements: Statement 1: In Single-root I/O Virtualization (SR-IOV), forwarding is no longer as flexible because it relies on a layer two switch that is built into the hardware of the NIC. Statement 2: In Single-root I/O Virtualization (SR-IOV), the live VM migration becomes trickier, because the virtual machine is tied to physical resources of the machine.",
        answer: "C) Both statements are true",
        options: [
            "A. Only statement 1 is true",
            "B. Only statement 2 is true",
            "C. Both statements are true",
            "D. Both statements are false"
        ]
    },
    {
        numb: 19,
        question: "To offer hot-spot free performance for arbitrary traffic matrices, VL2 uses two related mechanisms:",
        answer: "D) VLB and ECMP",
        options: [
            "A. Flows and out-of-order delivery",
            "B. Clos network and EQMP",
            "C. Agility and Load balancing",
            "D. VLB and ECMP"
        ]
    },
    {
        numb: 20,
        question: "What are the two key design goals for Open vSwitch?",
        answer: "D) Flexible and fast-forwarding",
        options: [
            "A. Scalability and partitioning",
            "B. Isolation and tunneling",
            "C. Reliability and filtering",
            "D. Flexible and fast-forwarding"
        ]
    },
    {
        numb: 21,
        question: "Which delivery model is an example of a cloud computing environment that provides users access to Virtual Machines?",
        answer: "B) Infrastructure as a Service (IaaS)",
        options: [
            "A. Software as a Service (SaaS)",
            "B. Infrastructure as a Service (IaaS)",
            "C. Platform as a Service (PaaS)",
            "D. Application as a Service (AaaS)"
        ]
    },
    {
        numb: 22,
        question: "Which of these statements are correct? Statement-1: Moore’s law indicates that processor speed doubles every 18 months. Statement-2: Gilder’s law indicates that network bandwidth has doubled each year in the past.",
        answer: "C) Both statements are correct",
        options: [
            "A. Only statement 1 is correct",
            "B. Only statement 2 is correct",
            "C. Both statements are correct",
            "D. Both statements are false"
        ]
    },
    {
        numb: 23,
        question: "Utility computing is a model where service provider",
        answer: "A) Makes computing resources available to the customer as needed",
        options: [
            "A. Makes computing resources available to the customer as needed",
            "B. Makes computing resources available to the customer for some amount of time",
            "C. Can’t say – implementation dependent",
            "D. Maximize revenue"
        ]
    },
    {
        numb: 24,
        question: "Find out the correct property to solve mutual exclusion in distributed system: Property 1: At most one process executes in critical section at any time Property 2: Every request for a critical section is granted eventually Property 3: Requests are granted in the order they were made",
        answer: "D) Property 1: Safety, Property 2: Liveness, Property 3: Fairness",
        options: [
            "A. Property 1: Liveness, Property 2: Fairness, Property 3: Safety",
            "B. Property 1: Safety, Property 2: Fairness, Property 3: Liveness",
            "C. Property 1: Fairness, Property 2: Safety, Property 3: Liveness",
            "D. Property 1: Safety, Property 2: Liveness, Property 3: Fairness"
        ]
    },
    {
        numb: 25,
        question: "Messages with ‘receive’ recorded but message ‘send’ not recorded and do not arise if processes roll back to a consistent global state are called_________________________.",
        answer: "C) Orphan messages",
        options: [
            "A. In-transit message",
            "B. Lost messages",
            "C. Orphan messages",
            "D. Duplicate messages"
        ]
    },
    {
        numb: 26,
        question: "Cell in HBase Table is a combination of _________________________",
        answer: "D) Row, column family, column qualifier and contains a value and a timestamp",
        options: [
            "A. Row and column family",
            "B. Row, column family and column qualifier",
            "C. Row, column family, column qualifier and row keys",
            "D. Row, column family, column qualifier and contains a value and a timestamp"
        ]
    },
    {
        numb: 27,
        question: "What is the characteristic of P2P network?",
        answer: "D) All of the mentioned",
        options: [
            "A. Fault Tolerance",
            "B. Self-Adaptation",
            "C. Dealing with instability",
            "D. All of the mentioned"
        ]
    }
];
