import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { CondidatService } from 'src/app/services/condidat.service';
import { Condidat } from 'src/app/models/condidat.model';
import { AddItemComponent } from 'src/app/components/add-item/add-item.component';

@Component({
   selector: 'app-condidat',
   templateUrl: './condidat.page.html',
   styleUrls: ['./condidat.page.scss'],
})
export class CondidatPage implements OnInit {

    condidats: Condidat[] = []; // Adjust the type based on your data structure

    constructor( 
        private condidatService: CondidatService,
        private modalController: ModalController
    ) { }

    /**
     * Loads the list of candidates from the service.
     * This method subscribes to the observable returned by the service
     * and assigns the fetched candidates to the component's `condidats` property.
     */
    loadCondidats(): void {
      this.condidatService.getCondidats().subscribe({
         next: (data: Condidat[]) => { // Assuming 'data' is an array of Condidat
              this.condidats = data; // Assigning the fetched candidates to the component's property
         },
         error: (error) => {
            console.error('Error fetching condidats:', error); // Logging the error
         }
      });
    }

    /**
     * Opens a modal for adding a new candidate.
     * Upon dismissal of the modal, it retrieves the new candidate data
     * and sends it to the backend for storage. If successful,
     * the new candidate is added to the local array.
     */
    async addCondidat() {
        const modal = await this.modalController.create({
            component: AddItemComponent
        });
  
        modal.onDidDismiss().then((result) => {
            const newCondidat = result.data;

            if (newCondidat) {
                // Ensure that response is typed as Condidat
                this.condidatService.addCondidat(newCondidat).subscribe({
                    next: (response: Condidat) => { 
                        // Add the new single condidat to the array
                        this.condidats.push(response); 
                    },
                    error: (error) => {
                        console.error('Error adding condidat:', error);
                    }
                });
            }
        });
  
        return await modal.present();
    }

    //load condidat on the enter
    ngOnInit() {
        this.loadCondidats();
    }
}
