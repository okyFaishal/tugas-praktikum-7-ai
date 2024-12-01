rules = {
  "Overheating": ["Kipas berisik", "Temperatur tinggi", "Kinerja lambat"],
  "RAM Issue": ["Kinerja lambat", "Aplikasi crash", "Blue screen"],
  "Hard Drive Failure": ["Data corrupt", "Suara abnormal", "Booting lambat"],
  "Virus Infection": ["Kinerja lambat", "Pop-up iklan", "File hilang"],
  "Driver Issue": ["Perangkat error", "Blue screen", "Kinerja lambat"],
  "Network Problem": ["Koneksi internet putus", "Website tidak terbuka"],
  "Power Supply Failure": ["Komputer mati mendadak", "Tidak menyala"],
  "Display Issue": ["Layar blank", "Garis pada layar", "Warna cacat"],
  "Software Conflict": ["Aplikasi crash", "Kinerja lambat", "Error message"],
  "Operating System Error": ["Blue screen", "Booting lambat", "File corrupt"]
}

def backward_chaining(gejala, rules):
  hasil_diagnosa = []
  for penyakit, syarat in rules.items():
    if any(g in gejala for g in syarat):
      hasil_diagnosa.append(penyakit)
  return hasil_diagnosa

gejala_input = ["Aplikasi crash"] 
diagnosis = backward_chaining(gejala_input, rules)
print(f"Diagnosis: {diagnosis}")