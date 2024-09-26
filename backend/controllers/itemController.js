let items = require('../itemMock')
  
// Retourne la liste des items
exports.getItems = (req, res) => {
    res.json(items);
};
  
// Ajoute un nouvel item à la liste
exports.createItem = (req, res) => {
    const { name, age, position, skills } = req.body;

    // test de validation Validate input
    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'Le nom est requis et doit être une chaîne non vide.' });
    }
    if (!age || typeof age !== 'number' || age <= 0) {
        return res.status(400).json({ error: 'L\'âge est requis et doit être un nombre positif.' });
    }
    if (!position || typeof position !== 'string' || position.trim() === '') {
        return res.status(400).json({ error: 'Le poste est requis et doit être une chaîne non vide.' });
    }
    if (!Array.isArray(skills) || skills.some(skill => typeof skill !== 'string' || skill.trim() === '')) {
        return res.status(400).json({ error: 'Les compétences doivent être un tableau de chaînes non vides.' });
    }

    const newItem = {
        id: items.length + 1,  // Auto-increment ID
        name: name.trim(),
        age: age,
        position: position.trim(),
        skills: skills.map(skill => skill.trim()), // Trim each skill
    };

    items.push(newItem);
    res.status(201).json(newItem);
};