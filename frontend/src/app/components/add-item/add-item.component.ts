import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { Condidat } from 'src/app/models/condidat.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent  implements OnInit {
    newCondidat: Condidat = {
        id: 0, 
        name: '',
        age: 0,
        position: '',
        skills: []
    };

    selectedSkills: string[] = [];
    availableSkills: string[] = ['JavaScript', 'TypeScript', 'Angular', 'Ionic', 'React', 'Node.js'];

    constructor( private modalController: ModalController ) { }

    // Check if all required fields are filled
    isFormValid(): boolean {
        return this.newCondidat.name.trim() !== '' &&
            this.newCondidat.age > 0 &&
            this.newCondidat.position.trim() !== '' &&
            this.newCondidat.skills.length > 0;
    }

    save(): void {
        // Assign selected skills to newCondidat
        this.newCondidat.skills = this.selectedSkills; 
        // Pass data back to the modal
        this.modalController.dismiss(this.newCondidat); 
    }

    // Dismiss the modal without saving
    dismiss(): void {
        this.modalController.dismiss(); 
    }

    removeSkill(skill: string): void {
        // Remove skill from selectedSkills
        this.selectedSkills = this.selectedSkills.filter(s => s !== skill); 
    }

    ngOnInit() {}

}
