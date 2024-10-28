

const db = require('../database');

const addExpense = (req, res) => {
    const { userId, amount, description,  category } = req.body;

        db.query('INSERT INTO expenses (user_id, amount, description, category) VALUES (?, ?, ?, ?)', [userId, amount, description, category], (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to create Expanse' });
            }
            return res.status(201).json({ message: 'expanse created successfully' });
        });
    };

const fetchData = (req, res) => {
    db.query('SELECT * FROM expenses', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query error' });
        }
        return res.status(200).json({ expenses: results });
    });
};

const fetchDataById = (req, res) => {
    // let { userId } = req.params; // Destructure userId from req.params
    let userId  = req.params.id; 
    db.query('SELECT * FROM expenses WHERE user_id = ?', [userId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query error' });
        }
        res.json(results);
    });
};

const deleteExpanseById =(req,res)=>{
    const id = req.params.id;
    db.query('DELETE FROM expenses WHERE user_id  = ?', [id], (err, results) =>{
           if(err){
            return res.status(500).json({error: 'Database query error'});
           }
           else{
            return res.status(200).json({message: 'Expanse deleted successfully'});
           }
    });
}

            
    
module.exports =  {addExpense , fetchData,fetchDataById ,deleteExpanseById};