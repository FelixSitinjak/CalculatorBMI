document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Konversi cm ke m

    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';

    // Tentukan kategori BMI
    if (bmi < 18.5) {
        category = 'Kekurangan Berat Badan';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Berat Badan Normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Kelebihan Berat Badan';
    } else {
        category = 'Kegemukan (Obesitas)';
    }

    document.getElementById('result').innerHTML = `BMI Anda: ${bmi} <br> Kategori: ${category}`;
});