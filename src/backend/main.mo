import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Nat "mo:core/Nat";

actor {
  type ContactForm = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
  };

  module ContactForm {
    public func compareByEmail(form1 : ContactForm, form2 : ContactForm) : Order.Order {
      Text.compare(form1.email, form2.email);
    };
  };

  let contactForms = Map.empty<Nat, ContactForm>();
  var nextId = 0;

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, message : Text) : async Nat {
    let form : ContactForm = { name; email; phone; message };
    let id = nextId;
    contactForms.add(id, form);
    nextId += 1;
    id;
  };

  public query ({ caller }) func getContactForm(id : Nat) : async ContactForm {
    switch (contactForms.get(id)) {
      case (?form) { form };
      case (null) { Runtime.trap("Contact form not found") };
    };
  };

  public query ({ caller }) func getAllContactForms() : async [ContactForm] {
    contactForms.values().toArray();
  };

  public query ({ caller }) func getAllContactFormsByEmail() : async [ContactForm] {
    contactForms.values().toArray().sort(ContactForm.compareByEmail);
  };
};
